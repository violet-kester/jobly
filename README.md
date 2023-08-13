<!-- header -->

<div align='center'>
  <a href='https://violetkester-jobly.surge.sh'>
    <img src='/public/logos/jobly-logo.png' alt='Logo'>
  </a>
  <h1>Jobly</h1>
  <p>
    Browse jobs by title or company.
  </p>
  <p>
    <a href='https://violetkester-jobly.surge.sh' target='_blank'>View Demo</a>
  </p>
</div>

<hr/>

<!-- content -->

<div>
  <h3>About</h3>
  <hr/>
  <p>
    The React + Material UI frontend repository for Jobly.<br/>
    Jobly is a responsive, full-stack single-page web application for searching jobs and companies in a database.<br/>
  </p>
  <p>
    • Makes RESTful API calls to the the Node/Express/PostgreSQL backend.</br>
    • User authentication implemented with JSON Web Tokens.</br>
  </p>
  <h3>Log in</h3>
  <hr/>
  <p>
    <code>username: testuser</code><br />
    <code>password: password</code>
  </p>
  <h3>Running the application</h3>
  <hr/>
  <h5>1. Cloning repositories</h5>
  <p>
    In your project directory, clone the front and backend repositories:<br/>
    <code>git clone https://github.com/violet-kester/jobly-frontend.git</code><br/>
    <code>git clone https://github.com/violet-kester/jobly-backend.git</code>
  </p>
    <h5>2. Installing dependencies</h5>
  <p>
    In the both directories, run <code>npm install</code> to install all dependencies.
  </p>
  <h5>
    3. Seeding the database
  </h5>
  <p>
    In your <code>jobly/jobly-backend</code> directory,
    create and seed the database:<br/><br/>
    <code>createdb jobly</code><br/>
    <code>cd jobly-backend</code><br/>
    <code>psql jobly.sql</code><br/>
  <p>
  <h5>
    4. Starting servers
  </h5>
  <p>
    In your <code>jobly/jobly-frontend</code> directory,</br>
    run <code>npm start</code> to start the frontend development server.
  <p>
  </p>
    In your <code>jobly/jobly-backend</code> directory,</br>
    Run <code>node server.js</code> or <code>nodemon server.js</code> to start the backend server on port 3001.
  </p>
  <p>
    Open the app in your browser at <a href='http://localhost:3000'>http://localhost:3000</a>.
  </p>
</div>

<!-- images  -->

<div align='center'>
  <h3>Images</h3>
  <hr/><br/>
  <div class='images-container'>
    <img src='/public/screenshots/jobly-screenshot-1.jpg' alt='Jobly screenshot 1'>
    <img src='/public/screenshots/jobly-screenshot-2.jpg' alt='Jobly screenshot 2'>
    <img src='/public/screenshots/jobly-screenshot-3.jpg' alt='Jobly screenshot 3'>
    <img src='/public/screenshots/jobly-screenshot-4.jpg' alt='Jobly screenshot 4'>
  </div>
</div>