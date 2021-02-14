import styled from 'styled-components';


export const Row = styled.div`
  width: 100%;
  clear:both;
`;

export const PopupContainer = styled.div`
    display: flex;
    padding: 10px;
`;

export const Column = styled.div`
    width: 50%;
    float:left;
    padding: 10px 2%
`;

export const Label = styled.label`
    font-weight: 600;
    white-space: nowrap;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Br=styled.div`
    height: 5px;
    background-color: #1f3846;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Button =styled.button` 
    border: none;
    color: white;
    padding:8px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin:20px 0 10px 5px;
    cursor: pointer;
`;

