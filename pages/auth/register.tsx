/* eslint-disable react/no-danger */
import { PureComponent } from 'react';
import { Row, Col } from 'antd';
import Link from 'next/link';
import Head from 'next/head';
import { IUIConfig } from 'src/interfaces';
import { connect } from 'react-redux';
import { authService, userService } from '@services/index';
import { loginSuccess } from '@redux/auth/actions';
import { updateCurrentUser } from '@redux/user/actions';
import Router from 'next/router';
import './index.less';
import { url } from 'inspector';

interface IProps {
  ui: IUIConfig;
  loginSuccess: Function;
  updateCurrentUser: Function;
}

class Dashboard extends PureComponent<IProps> {
  static layout = 'blank';

  static authenticate = false;

  state = {
    loginAs: 'user'
  };

  async componentDidMount() {
    const {
      loginSuccess: loginSuccessHandler,
      updateCurrentUser: updateCurrentUserHandler
    } = this.props;
    const token = authService.getToken();
    if (!token || token === 'null') {
      return;
    }
    authService.setToken(token);
    const user = await userService.me({
      Authorization: token
    });

    // TODO - check permission
    if (!user.data._id) {
      return;
    }
    loginSuccessHandler();
    updateCurrentUserHandler(user.data);
    Router.push('/home');
  }

  handleSwitch(value) {
    this.setState({ loginAs: value });
  }

  render() {
    const { ui } = this.props;
    const { loginAs } = this.state;
    return (
      <div className="container">
        <Head>
          <title>
            {ui?.siteName}
            {' '}
            | Register
          </title>
        </Head>
        <div className="main-container" style={{maxWidth: "100%"}}>
          <Row>
            <Col span={12}>
              <div style={{backgroundImage: `url(../../static/assets/login-page/left-bg-green.png)`}}>new</div>
            </Col>
            <Col span={12}>
              <div style={{backgroundColor: "blue"}}>new</div>
            </Col>
          </Row>
          <div className="login-box">
            <Row>
              <Col
                xs={24}
                sm={24}
                md={8}
                lg={12}                
              >
                <div
                  className="login-content left fixed"
                  style={ui.loginPlaceholderImage ? { backgroundImage: `url(${ui.loginPlaceholderImage})` } : null}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={16}
                lg={12}
              >
                <div className="login-content right custom">
                  <div className="switch-btn">
                    <button
                      type="button"
                      className={loginAs === 'user' ? 'active' : ''}
                      onClick={this.handleSwitch.bind(this, 'user')}
                      style={{ marginRight: '20px' }}
                    >
                      Fan Signup
                    </button>
                    <button
                      type="button"
                      className={loginAs === 'performer' ? 'active' : ''}
                      onClick={this.handleSwitch.bind(this, 'performer')}
                    >
                      Creator Signup
                    </button>
                  </div>
                  <div className="welcome-box">
                    <h3>
                      {loginAs === 'user' ? 'Fan' : 'Model'}
                      {' '}
                      Benefits
                    </h3>
                    {loginAs === 'performer' ? (
                      <div>
                        {ui && ui.modelBenefit
                          ? <div dangerouslySetInnerHTML={{ __html: ui.modelBenefit }} />
                          : (
                            <ul>
                              <li>Lightning fast uploading</li>
                              <li>Multi-video uploading</li>
                              <li>Chat with fans</li>
                              <li>Cross-over-content between creators</li>
                              <li>Individual creator store</li>
                              <li>Affiliate program for blogs to promote your content</li>
                              <li>80% Standard commission rate</li>
                              <li>(Deduct 5% when gained from affiliates)</li>
                            </ul>
                      )}
                        <Link href="/auth/model-register">
                          <a className="btn-primary ant-btn ant-btn-primary ant-btn-lg">
                            CREATOR SIGN UP
                          </a>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        {ui && ui.userBenefit ? <div dangerouslySetInnerHTML={{ __html: ui.userBenefit }} /> : (
                          <ul>
                            <li>View exclusive content</li>
                            <li>Monthly and Yearly subscriptions</li>
                            <li>Fast and reliable buffering and viewing</li>
                            <li>Multiple solution options to choose from</li>
                            <li>Chat with creator</li>
                            <li>Access creator&apos;s personal store</li>
                            <li>Search and filter capabilities</li>
                            <li>Favorite your video for future viewing</li>
                          </ul>
                        )}
                        <Link href="/auth/fan-register">
                          <a className="btn-primary ant-btn ant-btn-primary ant-btn-lg">
                            FAN SIGN UP
                          </a>
                        </Link>
                      </div>
                    )}
                  </div>
                  <p className="text-center">
                    Have an account already?
                    <Link href="/">
                      <a> Log in here.</a>
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state: any) => ({
  ui: { ...state.ui }
});

const mapDispatch = { loginSuccess, updateCurrentUser };

export default connect(mapStatesToProps, mapDispatch)(Dashboard);
