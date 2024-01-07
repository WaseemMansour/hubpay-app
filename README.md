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
- [x] Should have FROM Currency Input
- [x] Should have TO currency Input
- [x] Should Show Conversion Rate + Fees
- [x] Should Show Processing Disclaimer
- [x] Should have " Start Transfer " CTA
- [x] Should retrieve exchange rate between base and target currencies
- [x] Should update TO Currency Input when FROM Value Change
- [x] Should update FROM Currency Input when TO value change.

#### Currency Input Component:
- [x] Should Show current Currency Flag and Code
- [x] Should Allow custom label
- [x] Should Allow User to change currency if Option is Active

#### Conversion Rate:
- [x] Show Rate between From & To Currencies
- [ ] Show Fees Info on Toggle - to be enabled after content clarification -

#### Start Transfer:
- [x] Show Success Message
