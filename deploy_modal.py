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

    api = FastAPI()
    api.mount("/", StaticFiles(directory="/site", html=True), name="site")
    return api
