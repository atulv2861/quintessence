from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
import os

from app.core.config import settings
from app.api.v1 import auth, blog, projects, services, testimonials, faqs, contact

app = FastAPI(
    title="Seven Healer counsultancy Pvt.Ltd API",
    description="API for Seven Healer counsultancy Pvt.Ltd website",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
if not os.path.exists("static"):
    os.makedirs("static")
app.mount("/static", StaticFiles(directory="static"), name="static")

# Include API routes
app.include_router(auth.router, prefix="/api/v1/auth", tags=["Authentication"])
app.include_router(blog.router, prefix="/api/v1/blog", tags=["Blog"])
app.include_router(projects.router, prefix="/api/v1/projects", tags=["Projects"])
app.include_router(services.router, prefix="/api/v1/services", tags=["Services"])
app.include_router(testimonials.router, prefix="/api/v1/testimonials", tags=["Testimonials"])
app.include_router(faqs.router, prefix="/api/v1/faqs", tags=["FAQs"])
app.include_router(contact.router, prefix="/api/v1/contact", tags=["Contact"])

@app.get("/")
async def root():
    return {
        "message": "Seven Healer counsultancy Pvt.Ltd API",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.exception_handler(404)
async def not_found_handler(request, exc):
    return JSONResponse(
        status_code=404,
        content={"message": "Resource not found"}
    )

@app.exception_handler(500)
async def internal_error_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"message": "Internal server error"}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

