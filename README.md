# # HubPay Currency Calculator App # #
### Description
- An International Payment Transfer App - Calculator Screen -
- User can change amount inputs, From or To Currency and instantly see the respective exchange rate updated.
- Utilizing mocked API response.
- Built with TypeScript and Expo.
- Unit/Integration tests written in TDD.

### UX
![App Design](assets/app-screenshot.png)
---
### Tests List
#### Calculator Screen:
- [ ] Should have FROM Currency Input
- [ ] Should have TO currency Input
- [ ] Should Show Conversion Rate + Fees
- [ ] Should Show Processing Disclaimer
- [ ] Should have " Start Transfer " CTA
- [ ] Should update TO Currency Input when FROM Value Change
- [ ] Should update FROM Currency Input when TO value change.

#### Currency Input Component:
- [ ] Should Show current Currency Flag and Code
- [ ] Should Allow custom label
- [ ] Should accept only positive number.
- [ ] Should display input numbers formatted.
- [ ] Should Allow User to change currency if Option is Active

#### Conversion Rate:
- [ ] Show Rate between From & To Currencies
- [ ] Show Fees Info on Toggle

#### Start Transfer:
- [ ] Show Success Message
