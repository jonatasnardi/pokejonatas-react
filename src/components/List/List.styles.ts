import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 15px;

  p {
    font-size: 18px;
    border-bottom: 1px solid #BBB;
    margin-bottom: 0;
    padding-bottom: 10px;
  }
`

export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;
  position: relative;
  font-size: 18px;
  width: 100%;
  margin: 0;
  padding: 18px 20px;
  background: #FFF;
  border-left: 1px solid #BBB;
  border-right: 1px solid #BBB;
  border-bottom: 1px solid #BBB;
  color: #888;
`

type FavoriteStarProps = {
  favorited: boolean;
}

export const FavoriteStar = styled.span<FavoriteStarProps>`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 26px;
  transition: all 0.3s ease;
  color: ${({ favorited }) => favorited ? '#f7cb08' : '#888'};

  :hover {
    color: #f7cb08;
  }
`
