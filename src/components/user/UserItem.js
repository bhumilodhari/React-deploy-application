import React from 'react'
import { Lock, Trash2 } from "react-feather";
import DropDownStyle from '../../styles/DropDown.Style';
import UserDataStyle from '../../styles/UserData/UserDataStyle';
import UserNameStyle from '../../styles/UserData/UserNameStyle'
import Picture from '../../styles/UserData/Picture';
import UserContent from '../../styles/UserData/UserContent';
import Status from '../../styles/UserData/StatusStyle';
import StatusStyle from '../../styles/UserData/StatusBox';
import { cardActions } from '../../store/detail';
import { useDispatch } from 'react-redux';


const UserItem = (props) => {

  const dispatch = useDispatch();

  const mouseHoverhandler = () => {
    dispatch(cardActions.setUser({
      email: props.email,
      name: props.name,
      avatar: props.avatar
    }));
  };
  const mouseLeavehandler = () => {
    dispatch(cardActions.removeUser())
  }

  const owner = (
    <StatusStyle>
      <Status>
        <div className="active">Active</div>
      </Status>
      <div className="owner">Owner</div>
      <div style={{ color: 'gray' }}>
        <Lock />
      </div>
    </StatusStyle>
  );
  const user = (
    <>
      <DropDownStyle>
        <option defaultChecked>Inactive</option>
        <option>Active</option>
      </DropDownStyle>
      <DropDownStyle>
        <option defaultChecked>Manager</option>
        <option>Owner</option>
      </DropDownStyle>
      <div style={{ color: 'gray' }}>
        <Trash2 />
      </div>
    </>
  );
  return (
    <>
      <UserDataStyle>
        <UserContent>
          <Picture src={props.avatar}
            onMouseEnter={mouseHoverhandler}
            onMouseLeave={mouseLeavehandler}
          />
          <UserNameStyle>
            <h4>{props.name}</h4>
            <p>{props.email}</p>
          </UserNameStyle>
        </UserContent>
        {props.id === 1 ? owner : user}
      </UserDataStyle>
    </>
  )
}

export default UserItem