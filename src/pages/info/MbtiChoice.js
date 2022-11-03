import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { MbtiAnswer } from '../../Store/store';

export default function MbtiChoice(props) {
  const { className, onClose, maskCloseable, closeable, visible } = props;
  const mbtiArr = [
    'ENTJ',
    'ENTP',
    'ENFJ',
    'ENFP',
    'ESTJ',
    'ESTP',
    'ESFJ',
    'ESFP',
    'INTJ',
    'INTP',
    'INFJ',
    'INFP',
    'ISTJ',
    'ISTP',
    'ISFJ',
    'ISFP',
  ];

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };
  const [mbtis, setMbtis] = useState(false);
  const [mbtiChoice, setMbtiChoice] = useRecoilState(MbtiAnswer);
  // useEffect(() => {});
  const onChangeChoice = (e) => {
    setMbtiChoice(e.target.textContent);
    console.log(mbtiChoice);
  };

  return (
    <>
      <StModalOverlay visible={visible} />
      <StModalWrapper
        className={className}
        onClick={maskCloseable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <StModalInner tabIndex="0" className="modal-inner" onClick={(e) => e.stopPropagation()}>
          {closeable && (
            <>
              <StButtonContainer>
                {mbtiArr?.map((mbti, index) => {
                  return (
                    <StButtonStyle key={index} value={mbti || ''} name="mbti" onClick={onChangeChoice}>
                      {mbti}
                    </StButtonStyle>
                  );
                })}
              </StButtonContainer>
            </>
          )}
        </StModalInner>
      </StModalWrapper>
    </>
  );
}

MbtiChoice.propTypes = {
  visibles: PropTypes.func,
};

const StModalWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const StModalOverlay = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const StModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: black;
  border-radius: 10px;
  width: 100%;
  max-width: 480px;
  max-height: 750px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 40px;

  .modal-close {
    width: 30px;
    height: 30px;
    position: relative;
    display: flex;
    margin-left: auto;
    &:hover {
      transform: rotate(-45deg);
    }
  }
`;
const StButtonContainer = styled.div`
  width: 100%;
  max-width: 480px;
  max-height: 750px;
  overflow: auto;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const StButtonStyle = styled.div`
  width: 100px;
  height: 60px;
  border: 4px solid gray;
  border-radius: 20px;
  background-color: white;
  font-size: large;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
