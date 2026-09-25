from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProgramViewSet

router = DefaultRouter()
router.register(r"categories", CategoryViewSet, basename="category")
router.register(r"programs", ProgramViewSet, basename="program")

urlpatterns = router.urls
