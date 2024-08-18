<script>
// @ts-nocheck
    import { toasts, ToastContainer, FlatToast, BootstrapToast }  from "svelte-toasts";
    export const showToast = (Title, Type) => {
        const toast = toasts.add({
            title: Title,
            description: "",
            duration: 10000,
            placement: 'bottom-right',
            type: Type,
            theme: 'dark',
            onClick: () => {toast.remove()},
            onRemove: () => {},
        });
    };

</script>

<ToastContainer placement="bottom-right" let:data={data}>
    <FlatToast {data} />
</ToastContainer>