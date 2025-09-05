from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app.schemas.service import Service
from app.services.service_service import ServiceService

router = APIRouter()

@router.get("/", response_model=List[Service])
async def get_services(
    skip: int = 0,
    limit: int = 100,
    active_only: bool = True,
    db: Session = Depends(get_db)
):
    """Get all services"""
    service_service = ServiceService(db)
    return await service_service.get_services(
        skip=skip, limit=limit, active_only=active_only
    )

@router.get("/{slug}", response_model=Service)
async def get_service_by_slug(
    slug: str,
    db: Session = Depends(get_db)
):
    """Get service by slug"""
    service_service = ServiceService(db)
    service = await service_service.get_service_by_slug(slug)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

