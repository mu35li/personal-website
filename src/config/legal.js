
export const legal = {
  operatorName: 'Julian Deinert',
  street: 'Pinneberger Chaussee 21',
  postalCode: '22523',
  city: 'Hamburg',
  country: 'Deutschland',
  email: 'julian.deinert@gmail.com',
  phone: '+4915785731792',
  phoneDisplay: '+49 157 85731792'
}

export function formatPostalAddress() {
  const lines = [legal.operatorName]
  if (legal.street) {
    lines.push(legal.street)
  }
  const cityLine = [legal.postalCode, legal.city].filter(Boolean).join(' ')
  if (cityLine) {
    lines.push(cityLine)
  }
  if (legal.country) {
    lines.push(legal.country)
  }
  return lines
}
