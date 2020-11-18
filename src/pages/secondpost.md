---
title: "Using Django framework and PostgreSQL together"
date: "2017-08-21"
---

Using Django framework and PostgreSQL together


* Install Django
 - python -m pip install Django

* Create new project with template
 - django-admin startproject mysite  

* In setting.py, chnage the database configuration to:

```python

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'Server IP',
        'PORT': '5432',
    }
}

```
* python manage.py runserver



<iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe>