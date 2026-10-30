# Deploy this folder as a static site on Modal (https://modal.com).
# Usage: pip install modal && modal deploy deploy_modal.py
import os
import modal

SITE_DIR = os.path.dirname(os.path.abspath(__file__))

app = modal.App("preact9-practice")

image = (
    modal.Image.debian_slim()
    .pip_install("fastapi[standard]")
    .add_local_dir(
        SITE_DIR,
        remote_path="/site",
        ignore=["deploy_modal.py", ".git", ".gitignore", "__pycache__", "node_modules"],
    )
)

@app.function(image=image)
@modal.concurrent(max_inputs=100)
@modal.asgi_app()
def web():
    from fastapi import FastAPI
    from fastapi.staticfiles import StaticFiles

    class NoCacheStaticFiles(StaticFiles):
        async def get_response(self, path, scope):
            response = await super().get_response(path, scope)
            if response.status_code == 200:
                # Force revalidation on every load. Without this, responses go
                # out with no Cache-Control and an epoch Last-Modified, so
                # browsers heuristically cache the app for years and deployed
                # updates never reach returning visitors.
                response.headers["Cache-Control"] = "no-cache"
            return response

    api = FastAPI()
    api.mount("/", NoCacheStaticFiles(directory="/site", html=True), name="site")
    return api
