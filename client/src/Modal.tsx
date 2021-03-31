// import * as React from 'react';
// import { getTheme, mergeStyleSets, FontWeights, Modal, IconButton, IIconProps} from '@fluentui/react';

// const cancelIcon: IIconProps = { iconName: 'Cancel' };

// export const PottyModal = () => {


//   return (
//     <div>
//       <Modal
//         isBlocking={false}
//         containerClassName={contentStyles.container}
//       >
//         <div className={contentStyles.header}>
//           <span>Hi</span>
//           <IconButton
//             styles={iconButtonStyles}
//             iconProps={cancelIcon}
//             ariaLabel="Close popup modal"
//           />
//         </div>
//         <div className={contentStyles.body}>
//           <p>Hello</p>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// const theme = getTheme();
// const contentStyles = mergeStyleSets({
//   container: {
//     display: 'flex',
//     flexFlow: 'column nowrap',
//     alignItems: 'stretch',
//   },
//   header: [
//     // eslint-disable-next-line deprecation/deprecation
//     theme.fonts.xLargePlus,
//     {
//       flex: '1 1 auto',
//       borderTop: `4px solid ${theme.palette.themePrimary}`,
//       color: theme.palette.neutralPrimary,
//       display: 'flex',
//       alignItems: 'center',
//       fontWeight: FontWeights.semibold,
//       padding: '12px 12px 14px 24px',
//     },
//   ],
//   body: {
//     flex: '4 4 auto',
//     padding: '0 24px 24px 24px',
//     overflowY: 'hidden',
//     selectors: {
//       p: { margin: '14px 0' },
//       'p:first-child': { marginTop: 0 },
//       'p:last-child': { marginBottom: 0 },
//     },
//   },
// });
// const iconButtonStyles = {
//   root: {
//     color: theme.palette.neutralPrimary,
//     marginLeft: 'auto',
//     marginTop: '4px',
//     marginRight: '2px',
//   },
//   rootHovered: {
//     color: theme.palette.neutralDark,
//   },
// };


