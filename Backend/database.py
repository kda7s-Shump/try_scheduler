from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def initialize_database(app) -> None:
    db.init_app(app)
    Migrate(app, db)

users_appointments = db.Table('users_appointments',
    db.Column('user_id',        db.Integer, db.ForeignKey('users.id')),
    db.Column('appointment_id', db.Integer, db.ForeignKey('appointments.id'))
)