from flask import jsonify, make_response, request
from functools import wraps

# check content-type decorator
def content_type(value):
    def _content_type(func):
        @wraps(func)
        def wrapper(*args,**kwargs):
            if not request.headers.get("Content-Type") == value:
                error_message = {
                    'error': 'not supported Content-Type'
                }
                return make_response(jsonify(error_message), 400)

            return func(*args,**kwargs)
        return wrapper
    return _content_type