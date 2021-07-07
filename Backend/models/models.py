from datetime import datetime as dt

from flask_login import UserMixin

from ..database import db


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id         = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False, default=dt.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=dt.now, onupdate=dt.now)

    name       = db.Column(db.String(20), nullable=False)

    def __init__(self, name):
        self.name = name

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id         = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False, default=dt.now)
    updated_at = db.Column(db.DateTime, nullable=False, default=dt.now, onupdate=dt.now)

    title      = db.Column(db.String(50), nullable=True)
    room_id    = db.Column(db.Integer,    nullable=True)
    start_date = db.Column(db.DateTime,   nullable=True)
    end_date   = db.Column(db.DateTime,   nullable=True)

    def __init__(self, title, room_id, start_date, end_date):
        self.title      = title
        self.room_id    = room_id
        self.start_date = start_date
        self.end_date   = end_date