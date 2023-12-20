import { useEffect, forwardRef, useState, ReactNode } from 'react';
import { Modal, ModalRef } from '../layout/BottomSheetModal';

import useForwardedRef from '@klectik/utils/src/hooks/useForwardedRef';
import Login from '../forms/Login';

interface Props {
    children?: ReactNode;
    redirect: string | boolean;
}

const LoginModal = forwardRef<ModalRef, Props>((props, ref) => {
    const { redirect } = props;
    const modalRef = useForwardedRef(ref);

    const [modalClosed, setModalClosed] = useState<boolean>(false);

    useEffect(() => {
        console.log(modalRef.current);
    }, [modalRef]);

    return (
        <Modal
            ref={modalRef}
            snapPoints={['50%']}
            title="Login"
            description="Enter credentials to login..."
            onDismiss={() => {
                setModalClosed(true);
            }}
            showCloseButton
        >
            <Login
                redirect={redirect}
                ref={modalRef}
                modalClosed={modalClosed}
            />
        </Modal>
    );
});

LoginModal.displayName = 'LoginModal';

export default LoginModal;
