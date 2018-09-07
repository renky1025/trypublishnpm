## how to publish npm to npmjs
#update lib host:
```sh
npm config set registry http://registry.npmjs.org/
```
#check permission:
```sh
npm owner ls kynpmtest
```
# steps
```sh
npm login (with account)
npm config ls (show signined data)
npm publish
```