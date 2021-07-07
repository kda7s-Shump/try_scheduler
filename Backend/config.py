class Config:
    JSON_AS_ASCII = False
    SECRET_KEY = 'stick-to-teeth'
    WTF_CSRF_ENABLED = True

    # SQLAlchemy
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{user}:{password}@{host}/{db-name}?charset=utf8'.format(**{
        'user': 'root',
        'password': 'root',
        'host': 'localhost',
        'db-name': 'try_react_flask'
    })
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False

config = Config