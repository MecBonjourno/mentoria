function currency(value: number) {
    return 'R$ ' + value.toLocaleString('pt', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
}

export default currency