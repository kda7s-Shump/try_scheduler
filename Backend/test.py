import unittest

from run import app

##
# It also works with Japanese class name.
# It also works with Japanese test-case name.
##

class Test_flask_app_正常系(unittest.TestCase):
    def setUp(self):
        """Set the common parameters"""

        self.ENDPOINT    = "http://localhost:5000/{}"
        self.DATA        = None
        self.STATUS      = "200 OK"
        self.STATUS_CODE = 200
        self.ROUTE       = None

    def test_1_rootにアクセスできる(self):
        """Set the individual parameters for each case"""

        self.DATA  = b"Hello, world!"
        self.ROUTE = ""

        # Run the API using a test client.
        with app.test_client() as client:
            response = client.get(self.ENDPOINT.format(self.ROUTE))

        assert response.data        == self.DATA
        assert response.status      == self.STATUS
        assert response.status_code == self.STATUS_CODE

        return

if __name__ == '__main__':
    unittest.main()
