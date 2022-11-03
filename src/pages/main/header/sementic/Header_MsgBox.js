import styled from 'styled-components';
import { useQuery, useMutation } from '@tanstack/react-query';
import { ReadMsg } from '../../../../api/get/ApiGET';
import { MsgSend } from '../../../../api/post/ApiPOST';
import { useState } from 'react';

export default function Header_MsgBox() {
  const { data: ReadMsgs } = useQuery(['ReadMsg'], ReadMsg, {
    onSuccess: (temp) => {
      console.log('msg', temp);
    },
  });

  console.log(ReadMsgs);
  return (
    <MsgContainer>
      {ReadMsgs &&
        ReadMsgs.data.map((data) => {
          return (
            <MsgBox key={data?.id}>
              <StProfileImg src={data?.photo}></StProfileImg>
              <StProfileName>{data?.username}</StProfileName>
              <MsgBoxMsg>{data?.message}</MsgBoxMsg>
            </MsgBox>
          );
        })}
    </MsgContainer>
  );
}

const MsgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MsgBox = styled.div`
  width: 100%;
  height: 50px;

  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const StProfileImg = styled.img`
  width: 36px;
  height: 37px;
  object-fit: cover;
  border-radius: 20px;
  margin-left: 12px;
  border: 1px solid #f1f1f1;
`;

const StProfileName = styled.p`
  color: black;
  margin-left: 12px;
  font-weight: bold;
`;

const MsgBoxMsg = styled.span`
  width: 230px;
  margin-left: 8px;
  text-overflow: ellipsis;
  /* overflow: auto; */
  white-space: nowrap;
  word-wrap: break-word;
`;

/* <MsgBox>
        <StProfileImg src="https://pbs.twimg.com/media/EbSKBtIUMAA47Eq.jpg"></StProfileImg>
        <StProfileName>보노보노</StProfileName>
        <MsgBoxMsg>나랑 함께 바다에 놀러가서 조개 수집할래요?</MsgBoxMsg>
      </MsgBox>
      <MsgBox>
        <StProfileImg src="https://t1.daumcdn.net/cfile/tistory/99606E405A33E19D1D"></StProfileImg>
        <StProfileName>페페</StProfileName>
        <MsgBoxMsg>ㅠㅠ흐궇흐규ㅜㅜ흑ㅎ규ㅜㄱ흑커헉ㅋㅠ퓨ㅠ</MsgBoxMsg>
      </MsgBox>
      <MsgBox>
        <StProfileImg src="https://pbs.twimg.com/media/EbSKBtIUMAA47Eq.jpg"></StProfileImg>
        <StProfileName>보노보노</StProfileName>
        <MsgBoxMsg>나랑 함께 바다에 놀러가서 조개 수집할래요?</MsgBoxMsg>
      </MsgBox>
      <MsgBox>
        <StProfileImg src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/nj7CXPI_QC6oH1y4Ps1grCOB6XY.jpg"></StProfileImg>
        <StProfileName>새람이</StProfileName>
        <MsgBoxMsg>안녕하세요. 반갑습니다. 저는 새람이라고 합니다.</MsgBoxMsg>
      </MsgBox>
      <MsgBox>
        <StProfileImg src="https://t1.daumcdn.net/cfile/tistory/99606E405A33E19D1D"></StProfileImg>
        <StProfileName>페페</StProfileName>
        <MsgBoxMsg>ㅠㅠ흐궇흐규ㅜㅜ흑ㅎ규ㅜㄱ흑커헉ㅋㅠ퓨ㅠ</MsgBoxMsg>
      </MsgBox> */
