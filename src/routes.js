import React, { useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'

import HomePage from './pages/homePage'
import BrowseCasesPage from './pages/browseCasesPage'
import ReportCasePage from './pages/reportCasePage'
import CreateAccount from './pages/createAccount'
import CaseDetailPage from './pages/caseDetailPage'
import NoMatch from './pages/noMatch'
import Account from './pages/account'

import { Navigation } from './organisms/navigation'
import { Footer } from './organisms/footer'

import ScrollToTop from './util/ScrollToTop'

const Routes = () => {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/browse-cases">
            <BrowseCasesPage />
          </Route>
          <Route exact path="/report-a-case">
            <ReportCasePage />
          </Route>
          <Route exact path="/create-account">
            <CreateAccount />
          </Route>
          <Route path="/cases/:id">
            <CaseDetailPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>

          {/* GATED PAGES */}

          <Route path="/account">
            <Account />
          </Route>
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  )
}

export default Routes
