from django.db import models

class Test(models.Model):
    title = models.TextField(null=False)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'test'
        
    def __str__(self):
        return self.title
