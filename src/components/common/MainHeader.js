import logo from '../../assets/images/Ic_sqoop.svg';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setActivities } from '../../store/modules/activities';
import { setModalActive } from '../../store/modules/currentCard';
import { getActivities } from '../../lib/api/activity';
import SaveModal from '../stepCard/SaveModal';

const HeaderBlock = styled.div`
  display: flex;
  margin: 0px 85px;
  padding: 8px 0px;
  justify-content: space-between;
  img:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  li {
    list-style: none;
    padding: 16px 10px;
    font-weight: 400;
    &:hover {
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

const Spacer = styled.div`
  height: 1rem;
`;

const MainHeader = ({ history, match }) => {
  const dispatch = useDispatch();
  const saveModalActive = data => dispatch(setModalActive(data));
  const currentCard = useSelector(state => state.currentCard);
  const { notSaved, modalActive } = currentCard;
  const url = match.path;

  return (
    <>
      <HeaderBlock>
        <img
          src={logo}
          alt="logo"
          style={{}}
          onClick={() => {
            if (notSaved) {
              saveModalActive(true);
            } else {
              history.push('/');
            }
          }}
        />
        <Wrapper>
          <li
            className="home"
            onClick={() => {
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/');
              }
            }}
            style={{ fontWeight: url === '/' ? 'bold' : 'normal' }}
          >
            홈
          </li>
          <li
            className="activities"
            onClick={() => {
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/activities');
              }
            }}
            style={{
              fontWeight:
                url === '/activities' || url === '/detail/:id'
                  ? 'bold'
                  : 'normal',
            }}
          >
            모아보기
          </li>
          <li
            className="mypage"
            onClick={() => {
              if (notSaved) {
                saveModalActive(true);
              } else {
                history.push('/mypage/profile');
              }
            }}
            style={{
              fontWeight:
                url === '/mypage/profile' || url === '/mypage/settings'
                  ? 'bold'
                  : 'normal',
            }}
          >
            마이페이지
          </li>
        </Wrapper>
      </HeaderBlock>
      <Spacer />

      {modalActive && <SaveModal setModalActive={saveModalActive} />}
    </>
  );
};

export default withRouter(MainHeader);
