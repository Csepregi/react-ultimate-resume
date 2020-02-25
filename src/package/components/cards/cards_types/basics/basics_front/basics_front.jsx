import React, { useCallback } from 'react';

import { Twemoji } from 'react-emoji-render';
import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';

import { useCardSide } from '../../../../commons/profile_card/profile_card_hooks/use_card_side';

import { styles } from './basics_front_styles';

const useStyles = createUseStyles(styles);

const BasicsFrontComponent = ({ data }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === 'front' ? 'back' : 'front'), [side, setSide]);

    return (
        <ProfileCardPaddedFront>
            <CenterContentContainer customClasses={{ container: classes.container }}>
                <div className={classes.texts}>
                    <ProfileCardFrontTypography
                        classes={{
                            container: classes.mainTypography
                        }}
                    >
                        {data.summary}
                    </ProfileCardFrontTypography>
                    <ProfileCardFrontTypography variant="h4" component="h3" classes={{ container: classes.location }}>
                        <Twemoji svg text="📍" />
                        {data?.currentCity?.name}
                    </ProfileCardFrontTypography>
                </div>
            </CenterContentContainer>
            <ProfileCardActions>
                <ProfileCardButton onClick={handleButtonClick}>
                    <FormattedMessage id="Basics.front.action" defaultMessage="More about me" />
                </ProfileCardButton>
            </ProfileCardActions>
        </ProfileCardPaddedFront>
    );
};

export const BasicsFront = BasicsFrontComponent;