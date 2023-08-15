<!-- header -->

<div align='center'>
  <a href='https://violetkester-jobly.surge.sh'>
    <img src='/public/logos/jobly-logo.png' width='75px' alt='Logo'>
  </a>
  <h1>Jobly</h1>
  <p>
    <i>Browse jobs by title or company.</i>
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
    Jobly is a responsive, full-stack single-page web application for searching jobs and companies in a database.
  </p>
  <p>
    <b>Frontend developed with:</b></br></br>
    · JavaScript<br/>
    · React<br/>
    · Material UI
  </p>
  <p>
    <i>Makes RESTful API calls to the backend.</i>
  </p>
  <p>
    <b>Backend developed with:</b></br></br>
    · JavaScript<br/>
    · Node<br/>
    · Express<br/>
    · PostgreSQL
  </p>
  <p>
    <i>User authentication implemented with JSON Web Tokens.</i>
  </p>
  <h3>Log in</h3>
  <hr/>
  <p>
    <code>username: testuser</code><br />
    <code>password: password</code>
  </p>
  <h3>Running the application</h3>
  <hr/>
  <h4>1. Clone the front and backend repositories.</h4>
  <p>
    In your project directory:<br/>
    <code>git clone https://github.com/violet-kester/jobly-frontend.git</code><br/>
    <code>git clone https://github.com/violet-kester/jobly-backend.git</code>
  </p>
    <h4>2. Install dependencies.</h4>
  <p>
    In both front and backend directories, run <code>npm install</code> to install all dependencies.
  </p>
  <h4>
    3. Create and seed the database.
  </h4>
  <p>
    In your <code>jobly/jobly-backend</code> directory,
    create and seed the database:<br/><br/>
    <code>createdb jobly</code><br/>
    <code>cd jobly-backend</code><br/>
    <code>psql jobly.sql</code><br/>
  <p>
  <h4>
    4. Start the servers.
  </h4>
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
  <hr/>
  <div class='images-container'>
    <img src='/public/screenshots/jobly-screenshot-1.jpg' alt='Jobly screenshot 1'>
    <img src='/public/screenshots/jobly-screenshot-2.jpg' alt='Jobly screenshot 2'>
    <img src='/public/screenshots/jobly-screenshot-3.jpg' alt='Jobly screenshot 3'>
    <img src='/public/screenshots/jobly-screenshot-4.jpg' alt='Jobly screenshot 4'>
  </div>
</div>