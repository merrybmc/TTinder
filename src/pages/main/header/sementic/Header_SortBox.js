import styled from 'styled-components';

export default function Header_SortBox() {
  return (
    <StSortBox>
      <StGenderBox value="20" max="100">
        <p>성별</p>
        <StChoiceGender>남자</StChoiceGender>
        <StChoiceGender>여자</StChoiceGender>
        <StChoiceGender>모두</StChoiceGender>
      </StGenderBox>
      <p>나이</p>
      <StAgeBox>
        <StAgeBar type="number"></StAgeBar>세<span>~</span>
        <StAgeBar type="number"></StAgeBar>세
      </StAgeBox>
      <p>지역</p>
      <button>선택</button>
      <p>MBTI</p>
      <button>선택</button>
      <br />
      <br />
      <button>정렬</button>
    </StSortBox>
  );
}

const StSortBox = styled.div`
  margin-left: 10px;
`;

const StGenderBox = styled.div``;

const StChoiceGender = styled.button`
  width: 50px;
  margin-right: 5px;
`;

const StAgeBox = styled.div``;
const StAgeBar = styled.input`
  width: 40px;
`;
