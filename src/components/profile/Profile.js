import React from 'react'
import * as S from './styled'

function Profile() {
  return (
    <S.Wrapper>
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/92954428?v=4" alt="avatar from user"/>
        <div>
            <S.WrapperUserInfo>
                <div>
                    <h1> Luis Henrique Jung</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>
                        <a href="https://github.com/LuisHenriqueJung" target="_blank"> LuisHenriqueJung</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                <div>
                    <h4>Seguidores</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Seguindo</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starred</h4>
                    <span>5</span>
                </div>
                </S.WrapperStatusCount>
            </S.WrapperUserInfo>
        </div>
    </S.Wrapper>
  )
}

export default Profile