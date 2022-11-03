import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MbtiChoice from './info/MbtiChoice';
import LocationChoice from './info/LocationChoice';
import { useRecoilState } from 'recoil';
import { LocaAnswer, MbtiAnswer } from '../Store/store';
import { FormDatas } from '../api/post/ApiPOST';
import { useMutation } from '@tanstack/react-query';
import personIcon from './sources/personIcon.png';
import HeaderInfo from './info/HeaderInfo';

export default function InformationInput() {
  const navigate = useNavigate();

  //모달창 열고 닫기
  const [modalOpenMbti, setModalOpenMbti] = useState(false);
  const [modalOpenLoca, setModalOpenLoca] = useState(false);
  const [modalCloseMbti, setModalCloseMbti] = useState(true);
  const [modalCloseLoca, setModalCloseLoca] = useState(true);

  const onOpenModalMbti = (e) => {
    setModalOpenMbti(true);
    return;
  };
  const onModalCloseMbti = (e) => {
    setModalCloseMbti(false);
  };
  const onOpenModalLoca = (e) => {
    setModalOpenLoca(true);
  };
  const onModalCloseLoca = (e) => {
    setModalCloseLoca(false);
  };

  //이름 입력
  const [person, setPerson] = useState('');
  const onChangeName = (e) => {
    setPerson(e.target.value);
  };
  //생년월일 선택
  const [birth, setBirth] = useState('');
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  //성별 선택
  const genderArr = ['남', '여', '비공개'];
  const [gender, setGender] = useState('');
  const [choiceMan, setChoiceMan] = useState(false);

  const handleClick = (idx, e) => {
    e.preventDefault();
    const newArr = Array(genderArr.length).fill(false);
    newArr[idx] = true;
    setChoiceMan(newArr);
  };
  const onGenderChangeHandler = (e) => {
    setGender(e.target.textContent);
  };

  //mbti 선택
  const [mbtiPic, setMbtiChoice] = useRecoilState(MbtiAnswer);

  // 지역 선택
  const [loca, setLoca] = useRecoilState(LocaAnswer);

  // 사진 선택 state
  const [pic, setPic] = useState('');
  // 사진 미리보기 state
  const [picture, setPicture] = useState('');
  const [photo, setPhoto] = useState(null);

  const onPhotoHandler = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    const imgPv = document.querySelector('.informationinput');
    reader.onloadend = () => {
      const base64 = reader.result;
      imgPv.style.backgroundRepeat = 'no-repeat';
      imgPv.style.backgroundImage = `url(${reader.result})`;
      imgPv.style.backgroundSize = 'contain';
      imgPv.style.backgroundPosition = 'center';
      if (base64) {
        setPicture(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setPhoto({ file: e.target.files[0] });
    }
    const file = e.target.files[0];
    setPic(file);
    console.log(file);
  };

  //짧은 자기소개
  const [intro, setIntro] = useState('');
  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };

  //mutate
  const { mutate: postFormData } = useMutation(FormDatas, {
    onSuccess: (response) => {
      alert('저장완료!');
      navigate('/main');
    },
    onError: (error) => {
      alert('저장실패!');
    },
  });

  //formdata
  const onSubmitData = (event) => {
    const formData = new FormData();
    formData.append('file', pic);
    formData.append('userName', person);
    formData.append('birthDate', birth);
    formData.append('gender', gender);
    formData.append('mbti', mbtiPic);
    formData.append('location', loca);
    formData.append('introduce', intro);
    postFormData(formData);
  };

  return (
    <>
      <HeaderInfo />
      <StInformationContainer onClick={(e) => e.stopPropagation()}>
        <StInfoInputContainer>
          <StInfoNameBox>
            <img src={personIcon} alt="nameIconimage" />
            <StInfoNameInput name="username" onChange={onChangeName} placeholder="이름"></StInfoNameInput>
          </StInfoNameBox>
          <StInfoBirthBox>
            <StInfoBirthInputBox>
              <StInfoBirthInput
                placeholder="달력을 눌러서 생일을 선택해주세요"
                value={birth}
                readOnly
              ></StInfoBirthInput>
              <StInfoBirthInput
                type="date"
                name="birthdate"
                min="1930-01-01"
                max="2017-01-01"
                onChange={onChangeBirth}
              />
            </StInfoBirthInputBox>
          </StInfoBirthBox>
          <StInfoGenderBox>
            <StInfoGenderButtonBox>
              {genderArr?.map((element, index) => {
                return (
                  <StButtonStyle
                    key={index}
                    name="gender"
                    value={element}
                    handleClick={handleClick}
                    onClick={onGenderChangeHandler}
                    style={{ backgroundColor: gender === element ? 'gray' : '' }}
                  >
                    {element}
                  </StButtonStyle>
                );
              })}
            </StInfoGenderButtonBox>
          </StInfoGenderBox>
          <StInfoMbtiBox>
            <StButtonStyle
              type="button"
              onClick={() => {
                setModalOpenMbti(!modalOpenMbti);
              }}
            >
              {mbtiPic}
              {modalOpenMbti && (
                <MbtiChoice
                  visible={onOpenModalMbti}
                  closeable={true}
                  maskCloseable={true}
                  name="mbti"
                  onClose={() => {
                    onModalCloseMbti();
                  }}
                ></MbtiChoice>
              )}
            </StButtonStyle>
          </StInfoMbtiBox>

          <StInfoLocationBox>
            <StButtonStyle
              type="button"
              onClick={() => {
                setModalOpenLoca(!modalOpenLoca);
              }}
            >
              {loca}
              {modalOpenLoca && (
                <LocationChoice
                  visible={onOpenModalLoca}
                  closeable={true}
                  maskCloseable={true}
                  name="location"
                  onClose={() => {
                    onModalCloseLoca();
                  }}
                ></LocationChoice>
              )}
            </StButtonStyle>
          </StInfoLocationBox>
        </StInfoInputContainer>

        <StInfoPictureContainer>
          <div>
            <StPictures>
              <StPictureBox className="informationinput"></StPictureBox>
              <StPictureAddVisible>
                +
                <StPictureAdd
                  name="photo"
                  id="photo"
                  onChange={onPhotoHandler}
                  input
                  type="file"
                  accept="image/png"
                ></StPictureAdd>
              </StPictureAddVisible>
            </StPictures>
          </div>
          소개 한마디
          <StTextAreaContainer>
            <StTextArea onChange={onChangeIntro}></StTextArea>
          </StTextAreaContainer>
        </StInfoPictureContainer>
      </StInformationContainer>
      <StJoinButtonContainer>
        <StButtonStyleSubmit onClick={onSubmitData}>회원가입</StButtonStyleSubmit>
      </StJoinButtonContainer>
    </>
  );
}

const StInformationContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  height: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StInfoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
  height: 680px;

  /* background-color: pink; */
  padding: 50px;
`;

const StInfoNameBox = styled.div`
  width: 100%;
  max-width: 290px;
  height: 6vh;
  background-color: #121418;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
`;
const StInfoNameInput = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #121418;
  color: white;
  font-size: x-large;
  .input {
    background-image: url('sources/personIcon.png');
    background-repeat: no-repeat;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #3d444e;
    font-size: x-large;
  }
`;

const StInfoBirthBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 20vh;
`;
const StInfoBirthInputBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const StInfoBirthInput = styled.input`
  width: 300px;
  height: 40px;
  border: 4px solid #121418;
  border-radius: 10px;
  font-size: large;
`;

const StInfoGenderBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6vh;
`;

const StInfoGenderButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 20px;
`;

const StInfoMbtiBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6vh;
`;

const StInfoLocationBox = styled.div`
  width: 100%;
  max-width: 400px;
  height: 6vh;
`;

const StButtonStyle = styled.div`
  width: 90px;
  height: 60px;
  border: 4px solid #121418;
  border-radius: 10px;
  background-color: 'white';
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
  &:active {
    background-color: gray;
  }
`;

const StButtonStyleSubmit = styled.div`
  width: 90px;
  height: 60px;
  border-radius: 30px;
  background-color: #121418;
  font-size: large;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const StInfoPictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  max-width: 220px;
  height: 680px;
  font-size: large;
  /* background-color: skyblue; */
  padding: 50px;
`;

const StPictures = styled.div`
  width: 100%;
  max-width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;

const StPictureBox = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  background-color: #121418;
  position: relative;
  border-radius: 10px;
`;

const StPictureAddVisible = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fd425c;
  text-decoration: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: large;
  margin-left: 130px;
  margin-top: 180px;
  border-radius: 30px;
`;

const StPictureAdd = styled.input`
  width: 30px;
  height: 30px;
  text-decoration: none;
  position: absolute;
  opacity: 0;
`;

const StJoinButtonContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StTextAreaContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 150px;
  display: flex;
  justify-content: left;
`;

const StTextArea = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 130px;
  font-size: large;
  border: 4px solid #121418;
  border-radius: 20px;
  overflow: auto;
  padding: 20px;
`;
