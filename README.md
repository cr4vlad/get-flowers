# Get Flowers
 Flowers delivery service, hosted on heroku - https://get-flowers.herokuapp.com/

## Frontend

### Local launch
  
1. Install dependencies:
    $ npm install
2. Run locally:
    $ npm start

### Used frontend packages
* react
* react-router-dom
* react-helmet
* normalize.css
* axios
* redux
* react-redux
* redux-thunk
* standard (for `npx standard --fix`)

## Backend

1. Install Python 3.6 (3.7 also fine)
2. Create virtual environment in project directory (where `manage.py` or `package.json`)

    $ python -m venv env

3. Open virtual environment. From now on always run commands in virtual env.

    $ env\Scripts\activate

4. Install requirements

    $ pip install -r requirements.txt

5. Set development database. Works only in cmd.

    $ SET DEBUG_DATABASE=sqlite

6. Migrate database

    $ python manage.py migrate

7. Create user

    $ python manage.py createsuperuser

8. Run server

    $ python manage.py runserver

9. Create some products for testing.
    1. Login in `http://localhost:8000/admin/`
    2. Enter Products in ziteno section
    3. Create some Product instances

10. Go to landing to check if it works