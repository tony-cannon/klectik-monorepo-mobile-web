import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetFlatList,
    BottomSheetHandle,
    BottomSheetHandleProps,
    BottomSheetModal,
    BottomSheetModalProps,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { X } from 'phosphor-react-native';
import { forwardRef } from 'react';
import { Pressable, Text } from 'react-native';
import useForwardedRef from '@klectik/utils/src/hooks/useForwardedRef';

const ModalBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.75}
    />
);

interface ModalHandle extends BottomSheetHandleProps {
    showCloseButton: boolean;
    modalRef: React.RefObject<BottomSheetModal>;
}

const ModalHandle = (props: ModalHandle) => (
    <BottomSheetHandle {...props}>
        {props.showCloseButton && (
            <Pressable onPress={() => props.modalRef.current?.close()}>
                {/* <PhosphorTouchableIcon
                    icon={X}
                    color={'#000'}
                    IconWeight="bold"
                /> */}
                <X color="#000" />
            </Pressable>
        )}
    </BottomSheetHandle>
);

export type ModalRef = BottomSheetModal;

interface ModalProps extends BottomSheetModalProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    showCloseButton?: boolean;
}

export const Modal = forwardRef<ModalRef, ModalProps>((props, ref) => {
    const {
        children,
        title,
        description,
        showCloseButton = false,
        ...otherProps
    } = props;

    const modalRef = useForwardedRef(ref);

    return (
        <BottomSheetModal
            ref={modalRef}
            backdropComponent={ModalBackdrop}
            handleComponent={(props) =>
                ModalHandle({ modalRef, showCloseButton, ...props })
            }
            {...otherProps}
        >
            {title && <Text>{title}</Text>}
            {description && <Text>{description}</Text>}
            {children}
        </BottomSheetModal>
    );
});

Modal.displayName = 'BottomSheetModal';

export const ModalScrollView = BottomSheetScrollView;
export const ModalFlatlist = BottomSheetFlatList;

// type ConfirmModalProps = {
//     title: string;
//     description?: string;
//     ctaAction?: () => void;
//     ctaLabel: string;
//     ctaDanger?: boolean;
//     ctaDisabled?: boolean;
//     loading?: boolean;
//     /**
//      * Disables backdrop press to close the modal.
//      */
//     disableBackdropClose?: boolean;
//     /**
//      * Children will be rendered below the description and above the CTA button.
//      */
//     children?: React.ReactNode;
//     snapPoints?: (string | number)[];
//     /**
//      * Trigger to open the modal.
//      * You can also use ref to open the modal
//      */
//     trigger?: ReactNode;
// };

// TODO: Add loading state
// Drop-in replacement for Dialog, can be used to get confirmation from the user, e.g. deleting a library
// export const ConfirmModal = forwardRef<ModalRef, ConfirmModalProps>(
//     (props, ref) => {
//         const modalRef = useForwardedRef(ref);

//         return (
//             <>
//                 {props.trigger && (
//                     <Pressable onPress={() => modalRef.current?.present()}>
//                         {props.trigger}
//                     </Pressable>
//                 )}
//                 <BottomSheetModal
//                     ref={modalRef}
//                     backdropComponent={ModalBackdrop}
//                     handleComponent={(props) =>
//                         ModalHandle({
//                             modalRef,
//                             showCloseButton: false,
//                             ...props,
//                         })
//                     }
//                     snapPoints={props.snapPoints ?? ['25']}
//                 >
//                     {/* Title */}
//                     {props.title && <Text>{props.title}</Text>}
//                     <View>
//                         {/* Description */}
//                         {props.description && <Text>{props.description}</Text>}
//                         {/* Children */}
//                         {props.children && props.children}
//                         {/* Buttons */}
//                         <View>
//                             <Button
//                                 disabled={props.loading} // Disables Close button if loading
//                                 onPress={() => modalRef.current?.close()}
//                             >
//                                 <Text style={tw`text-sm font-medium text-ink`}>
//                                     Close
//                                 </Text>
//                             </Button>
//                             {props.ctaAction && (
//                                 <Button
//                                     onPress={props.ctaAction}
//                                     disabled={
//                                         props.ctaDisabled || props.loading
//                                     }
//                                 >
//                                     <Text>{props.ctaLabel}</Text>
//                                 </Button>
//                             )}
//                         </View>
//                     </View>
//                 </BottomSheetModal>
//             </>
//         );
//     }
// );
