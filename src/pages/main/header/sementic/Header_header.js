import styled from 'styled-components';

export default function Header_Header() {
  return (
    <HeaderContainer>
      <StProfileImg src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/nj7CXPI_QC6oH1y4Ps1grCOB6XY.jpg"></StProfileImg>
      <StProfileName>새람이</StProfileName>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 87px;
  background-color: #fd5b40;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
`;

const StProfileImg = styled.img`
  width: 36px;
  height: 37px;
  object-fit: cover;
  border-radius: 20px;
  margin-left: 12px;
`;

const StProfileName = styled.p`
  color: white;
  margin-left: 12px;
  font-weight: bold;
`;
