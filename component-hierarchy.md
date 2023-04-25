<!-- TODO: pattern match component design names -->

**App**

  **Jobly**
  <!--  TODO: take companies/jobs state out - -->
  state:
  - companies: list of all company take objs
  - jobs: list of all jobs

    **NavBar**

    **LandingPage**

    **CompaniesPage**
    <!-- TODO: let these pages hold companies state when visited -->

      **SearchBar**
      props:
      - handleSearch - update companies in state

      state:
      - formData: search term

      **CompaniesList**
      state:
      - companies: list of companies to show

      functions:
      - handleSearch - updates companies in state

    <!-- TODO: not being rendered by CompaniesList - comes from Jobly -->
    **Company**
     state:
    - currCompany
    - jobs: array of jobs listed by company - from api

          **JobsList**
          props:
          - jobs: list of jobs to show

            **Job**
            props:
            - job: job data

    **JobsPage**
    <!-- TODO: jobs state living in 3 places - keep it here -->
    state:
    - jobs: list of jobs
    <!-- TODO: consider piece of state for filter eg. "watson" -->

      **SearchBar**
      props:
      - handleSearch - update filter in state

      state:
      - formData: search term

      **JobsList**
      props:
      - jobs: list of jobs to show















