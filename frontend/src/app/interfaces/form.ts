export interface FormProps<T> {
    values?: Partial<T>;
    defaultValues?: Partial<T>;
    onSubmit: (values: T) => void;
    loading?: boolean;
    disableSubmit?: boolean;
}
