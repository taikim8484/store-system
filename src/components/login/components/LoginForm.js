// @flow

import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import { compose } from 'recompose'
import { withTranslation } from 'react-i18next'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as BudgetCreators } from '../../../store/ducks/budget';
import { Creators as AuthCreators } from '../../../store/ducks/auth';

import { Wrapper, InputWrapper, ButtonWrapper } from './styles';
import Input from '../../common/CustomInput';

type Props = {
  setOutdatedBudgets: Function,
  setSnackbarError: Function,
  users: Array<Object>,
  login: Function,
};

type State = {
  username: string,
  password: string,
}

class LoginForm extends Component<Props, State> {
  state = {
    username: '',
    password: '',
  };

  componentDidMount() {
    this._usernameInputRef.focus();
  }

  onTypeInputValue = (stateRef: string, value: string) => {
    this.setState({
      [stateRef]: value,
    });
  };

  onClickEnterButton = (): void => {
    const { setSnackbarError, users } = this.props;
    const { username, password } = this.state;

    const userSelected = users.filter(user => ((user.username === username) && (user.password === password)))[0];

    return (userSelected ? this.handleLogin(userSelected) : setSnackbarError('user_not_found'));
  };

  handleLogin = (user: Object): void => {
    const { setOutdatedBudgets, login } = this.props;

    setOutdatedBudgets();

    login(user);
  };

  render() {
    const { t: translate } = this.props
    const { username, password } = this.state;

    return (
      <Wrapper>
        <InputWrapper>
          <Input
            inputRef={(input) => { this._usernameInputRef = input; }}
            onChange={(event: Object): void => this.onTypeInputValue('username', event.target.value)}
            onBlur={() => {}}
            value={username}
            label={translate("username")}
            placeholder=""
            id="username"
            type="text"
            error=""
          />
        </InputWrapper>
        <Input
          onChange={(event: Object): void => this.onTypeInputValue('password', event.target.value)}
          onBlur={() => {}}
          value={password}
          type="password"
          placeholder=""
          label={translate("password")}
          id="password"
          error=""
        />
        <ButtonWrapper>
          <Button
            disabled={(password.length < 6)}
            variant="outlined"
            onClick={this.onClickEnterButton}
            color="primary"
          >
            {translate("signin")}
          </Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

const Creators = Object.assign({}, BudgetCreators, AuthCreators);

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

const enhance = compose(
  connect(null, mapDispatchToProps),
  withTranslation(),
)
export default enhance(LoginForm);
