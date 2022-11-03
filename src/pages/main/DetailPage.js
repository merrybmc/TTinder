import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { DetailUserData } from '../../api/get/ApiGET';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MsgSend } from '../../api/post/ApiPOST';

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: DetailuserDatas } = useQuery(['DetailUser'], () => DetailUserData(id), {
    onSuccess: (temp) => {
      console.log('detaildata', temp);
      console.log('details2', DetailuserDatas);
    },
  });

  const [stateMsgSend, setStateMsgSend] = useState({ message: '안녕하세요' });

  const { mutate: mutateMsgSend } = useMutation(MsgSend, {
    onSuccess: (temp) => {
      alert('발송 완료');
      console.log('msgSendResponseSuccess', temp);
    },
    onError: (temp) => {
      console.log('msgSendResponseError', temp);
      alert('메세지를 보낼 수 있는 개수를 초과하였습니다.');
    },
  });

  // onChange 댓글 입력 정보 담기
  const onCommentInputHandler = (event) => {
    const { name, value } = event.target;
    setStateMsgSend({ [name]: value });
    console.log(stateMsgSend);
  };

  const onMsgSend = () => {
    console.log('dd');
    mutateMsgSend({ id, stateMsgSend });
  };

  return (
    <DetailContainer>
      {DetailuserDatas && (
        <DetailUserInfoBox key={DetailuserDatas.data?.id}>
          <DetailUserImg src={DetailuserDatas.data?.photo}></DetailUserImg>
          {DetailuserDatas.data?.logging === false ? (
            <DetailIsConnect>🟡 접속중</DetailIsConnect>
          ) : (
            <DetailIsUnConnect>🔴 접속종료</DetailIsUnConnect>
          )}
          <DetailUserProfile>
            <DetailUserProfileName>{DetailuserDatas.data?.userName}</DetailUserProfileName>
            <DetailUserProfileAge>{DetailuserDatas.data?.age}</DetailUserProfileAge>
            <DetailUserProfileGender>{DetailuserDatas.data?.gender}성</DetailUserProfileGender>
            <DetailUserProfileLocation>{DetailuserDatas.data?.location}</DetailUserProfileLocation>
            <DetailUserProfileMBTI>{DetailuserDatas.data?.mbti}</DetailUserProfileMBTI>
            <ProfileLine />
            <DetailUserProfileBody>{DetailuserDatas.data?.introduce}</DetailUserProfileBody>
            <ProfileLine />
            <DetailUserMsgSendBox>
              <DetailUserMsgSendInput
                name="message"
                onChange={onCommentInputHandler}
                placeholder="메세지 입력..."
              ></DetailUserMsgSendInput>
              <DetailUserMsgSendbtn
                onClick={() => {
                  onMsgSend();
                }}
              >
                보내기
              </DetailUserMsgSendbtn>
            </DetailUserMsgSendBox>
            <DetailUserGoBack
              onClick={() => {
                navigate(-1);
              }}
            >
              X
            </DetailUserGoBack>
          </DetailUserProfile>
        </DetailUserInfoBox>
      )}
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 1544px;
  height: 973px;
  background-color: #f0f2f4;
  overflow-y: scroll;
`;

const DetailUserInfoBox = styled.div`
  margin-left: 583px;
  width: 376px;
  height: 566px;
  background-color: white;
  margin-top: 130px;
  margin-bottom: 100px;
  position: relative;
  border: 1px solid white;
  overflow-y: auto;
  overflow-x: hidden;
`;

const DetailUserImg = styled.img`
  width: 100%;
  height: 469px;
  position: absolute;
  object-fit: cover;
`;

const DetailIsConnect = styled.div`
  width: 100px;
  margin-top: 5px;
  position: absolute;
  font-weight: bold;
  margin-left: 295px;
`;

const DetailIsUnConnect = styled.div`
  width: 100px;
  position: absolute;
  font-weight: bold;
  color: #778194;
  margin-left: 280px;
  margin-top: 5px;
`;

const DetailUserProfile = styled.div`
  position: absolute;
  margin-top: 470px;
  /* margin-left: 20px; */
`;

const DetailUserProfileName = styled.span`
  font-size: 35px;
  color: black;
  font-weight: bold;
  margin-left: 10px;
  cursor: default;
`;

const DetailUserProfileAge = styled.span`
  font-size: 26px;
  color: black;
  margin-top: 500px;
  margin-left: 10px;
  cursor: default;
`;

const DetailUserProfileGender = styled.p`
  font-size: 18px;
  color: black;
  margin-left: 10px;
  cursor: default;
`;

const DetailUserProfileLocation = styled.p`
  font-size: 18px;
  color: black;
  margin-left: 10px;
  cursor: default;
`;

const DetailUserProfileMBTI = styled.p`
  font-size: 18px;
  color: black;
  margin-left: 10px;
  cursor: default;
`;

const ProfileLine = styled.div`
  width: 400px;
  height: 1px;
  margin-right: 500px;
  background-color: black;
`;

const DetailUserProfileBody = styled.p`
  width: 39%;
  font-size: 18px;
  color: black;
  margin-left: 10px;
  word-break: break-all;
  cursor: default;
`;

const DetailUserMsgSendBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const DetailUserMsgSendInput = styled.input`
  width: 33%;
  margin-right: 5px;
  outline: none;
`;

const DetailUserMsgSendbtn = styled.button`
  background-color: #fcf6f5;
  color: #7b9acc;
  border: 1px solid black;
  width: 6%;
  cursor: pointer;
  &:hover {
    background-color: #7b9acc;
    color: #fcf6f5;
  }
`;

const DetailUserGoBack = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  font-weight: bold;
  display: flex;
  border: 1px solid black;
  border-radius: 25px;
  color: red;
  align-items: center;
  justify-content: center;
  margin-left: 160px;
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ed6f63;
    color: white;
  }
`;
