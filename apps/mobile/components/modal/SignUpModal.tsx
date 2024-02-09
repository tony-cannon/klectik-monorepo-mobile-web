import { Modal, ModalRef } from '../layout/BottomSheetModal'
import useForwardedRef from '@klectik/utils/src/hooks/useForwardedRef'

const SignUpModal = forwardRef<ModalRef, Props>((props, ref) => {
    const { redirect } = props;
		const modalRef = useForwardedRef(ref);

		return (
			<Modal ref={modalRef} title="" description='' onDismiss={() => setModalClosed(true)}
		)
});
