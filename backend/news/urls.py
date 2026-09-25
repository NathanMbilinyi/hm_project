from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet

router = DefaultRouter()
router.register(r"news", ArticleViewSet, basename="article")

urlpatterns = router.urls
