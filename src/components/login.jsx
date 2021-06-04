import '../assets/login.css';
function Login() {
    return(
        <section ng-view autoscroll="true" className="ng-scope">
            <div className="unauth-wrapper ng-scope">
                <div className="header-logo">
                    <a href="/websites">
                        <img src="https://d3e54v103j8qbb.cloudfront.net/img/dashboard/logo-dark.f1e7132bc4.svg" />
                    </a>
                </div>
                <div className="unauth-main">
                    <div className="unauth-form">
                        <a href="/websites" className="inline-logo">
                            <img src="https://d3e54v103j8qbb.cloudfront.net/img/dashboard/logo-dark.f1e7132bc4.svg" />
                        </a>
                        <div ng-if="!orgName && !workspaceName" className="ng-scope">
                            <div ng-if="!ssoLoginEnabled" className="heading ng-scope">
                                <h1 ng-if="!needsTwoFactor" className="ng-scope">Log Into My Account</h1>
                            </div>
                            <div className="google-sign-in ng-scope">
                                <div id="g-signin" ng-click="loginWithGoogle()">
                                    <div style={{height: '50px', width: '180px'}} className="abcRioButton abcRioButtonLightBlue">
                                        <div className="abcRioButtonContentWrapper">
                                            <div className="abcRioButtonIcon" style={{padding: '15px'}}>
                                                <div style={{width: '18px', height: '18px'}} className="abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48" className="abcRioButtonSvg">
                                                        <g>
                                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <span style={{fontSize: '16px', lineHeight: '48px'}} className="abcRioButtonContents">
                                                <span id="not_signed_in6ft44gt8kbp0">Sign in with Google</span>
                                                <span id="connected6ft44gt8kbp0" style={{display: 'none'}}>Signed in with Google</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div ng-if="!needsTwoFactor" className="or-line ng-scope">
                                    <span>or</span>
                                </div>
                                <form noValidate name="form" method="POST" ng-submit="login(user)" className="fs-hide ng-pristine ng-invalid ng-invalid-required ng-valid-minlength">
                                    <div ng-show="!needsTwoFactor" className="field">
                                        <input placeholder="Email or Username" type="text" ng-model="user.username" name="username" data-automation-id="username-input" required ng-class="{ showError: showErrors}" autofocus className="ng-pristine ng-empty ng-invalid ng-invalid-required ng-touched" style={{}} />
                                        <div className="alert not-allowed hide" >
                                            <span>Invalid email address</span>
                                        </div>
                                    </div>
                                    <div ng-show="!needsTwoFactor && !ssoLoginEnabled" className="field">
                                        <input placeholder="Password" type="password" ng-model="user.password" name="password" data-automation-id="password-input" required ng-minlength={6} ng-class="{ showError: showErrors}" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-minlength" />
                                        <div className="alert not-allowed hide" ng-show="(form.password.$invalid) && showErrors">
                                            <span>Passwords must be at least six characters.</span>
                                        </div>
                                    </div>
                                    <button ng-type="submit" data-automation-id="login-button" className="button button--continue">
                                        <span ng-if="redirectUrl" className="ng-binding ng-scope">Log In</span>
                                    </button>
                                </form>
                                <p className="inline-link ng-scope">
                                    <a href="#">Don't have an account?</a>
                                </p>
                                <p className="inline-link right ng-scope"><a href="#">Forgot password?</a>
                                </p>
                                <p className="center-link ng-scope">
                                    <a href="#" data-automation-id="sso-login-link">Log in with SSO</a>
                                </p>
                                <div id="verification-recaptcha" data-sitekey="6Lfpp5kaAAAAAF3pJmEDGrNCvzwbXnnrV8g4W2Vh" data-callback="onVerificationComplete" data-size="invisible" className="g-recaptcha"><div className="grecaptcha-badge" data-style="bottomright" style={{width: '256px', height: '60px', display: 'block', transition: 'right 0.3s ease 0s', position: 'fixed', bottom: '14px', right: '-186px', boxShadow: 'gray 0px 0px 5px', borderRadius: '2px', overflow: 'hidden'}}>
                                    <div className="grecaptcha-logo">
                                        <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lfpp5kaAAAAAF3pJmEDGrNCvzwbXnnrV8g4W2Vh&co=aHR0cHM6Ly93ZWJmbG93LmNvbTo0NDM.&hl=en&v=sG0iO6gHcGdWJzjJjW9AY49S&size=invisible&cb=8jk8zxoan4te" width={256} height={60} role="presentation" name="a-69c490r6lmzx" frameBorder={0} scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" />
                                    </div>
                                    <div className="grecaptcha-error" />
                                        <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: '250px', height: '40px', border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: '0px', resize: 'none', display: 'none'}} defaultValue={""} />
                                    </div>
                                    <iframe style={{display: 'none'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login;