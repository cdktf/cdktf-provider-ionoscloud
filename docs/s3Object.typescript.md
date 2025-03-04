# `s3Object` Submodule <a name="`s3Object` Submodule" id="@cdktf/provider-ionoscloud.s3Object"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Object <a name="S3Object" id="@cdktf/provider-ionoscloud.s3Object.S3Object"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object ionoscloud_s3_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

new s3Object.S3Object(scope: Construct, id: string, config: S3ObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig">S3ObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3Object.S3Object.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig">S3ObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa">resetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold">resetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext">resetServerSideEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm">resetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey">resetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5">resetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3Object.S3Object.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3Object.S3Object.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3Object.S3Object.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3Object.S3Object.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetExpires"></a>

```typescript
public resetExpires(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMfa` <a name="resetMfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetMfa"></a>

```typescript
public resetMfa(): void
```

##### `resetObjectLockLegalHold` <a name="resetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockLegalHold"></a>

```typescript
public resetObjectLockLegalHold(): void
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockMode"></a>

```typescript
public resetObjectLockMode(): void
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetObjectLockRetainUntilDate"></a>

```typescript
public resetObjectLockRetainUntilDate(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetServerSideEncryptionContext` <a name="resetServerSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionContext"></a>

```typescript
public resetServerSideEncryptionContext(): void
```

##### `resetServerSideEncryptionCustomerAlgorithm` <a name="resetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerAlgorithm"></a>

```typescript
public resetServerSideEncryptionCustomerAlgorithm(): void
```

##### `resetServerSideEncryptionCustomerKey` <a name="resetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKey"></a>

```typescript
public resetServerSideEncryptionCustomerKey(): void
```

##### `resetServerSideEncryptionCustomerKeyMd5` <a name="resetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetServerSideEncryptionCustomerKeyMd5"></a>

```typescript
public resetServerSideEncryptionCustomerKeyMd5(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

s3Object.S3Object.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

s3Object.S3Object.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

s3Object.S3Object.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3Object.S3Object.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

s3Object.S3Object.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3Object resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3Object to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3Object that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3Object to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput">expiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput">mfaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput">objectLockLegalHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput">objectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput">serverSideEncryptionContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput">serverSideEncryptionCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput">serverSideEncryptionCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input">serverSideEncryptionCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa">mfa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext">serverSideEncryptionContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expiresInput"></a>

```typescript
public readonly expiresInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mfaInput`<sup>Optional</sup> <a name="mfaInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfaInput"></a>

```typescript
public readonly mfaInput: string;
```

- *Type:* string

---

##### `objectLockLegalHoldInput`<sup>Optional</sup> <a name="objectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHoldInput"></a>

```typescript
public readonly objectLockLegalHoldInput: string;
```

- *Type:* string

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockModeInput"></a>

```typescript
public readonly objectLockModeInput: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDateInput"></a>

```typescript
public readonly objectLockRetainUntilDateInput: string;
```

- *Type:* string

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionContextInput`<sup>Optional</sup> <a name="serverSideEncryptionContextInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContextInput"></a>

```typescript
public readonly serverSideEncryptionContextInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithmInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyInput"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5Input: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mfa`<sup>Required</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.mfa"></a>

```typescript
public readonly mfa: string;
```

- *Type:* string

---

##### `objectLockLegalHold`<sup>Required</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockLegalHold"></a>

```typescript
public readonly objectLockLegalHold: string;
```

- *Type:* string

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `serverSideEncryptionContext`<sup>Required</sup> <a name="serverSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionContext"></a>

```typescript
public readonly serverSideEncryptionContext: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerAlgorithm"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithm: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKey`<sup>Required</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKey"></a>

```typescript
public readonly serverSideEncryptionCustomerKey: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.serverSideEncryptionCustomerKeyMd5"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3Object.S3Object.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectConfig <a name="S3ObjectConfig" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.Initializer"></a>

```typescript
import { s3Object } from '@cdktf/provider-ionoscloud'

const s3ObjectConfig: s3Object.S3ObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key">key</a></code> | <code>string</code> | The key of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content">content</a></code> | <code>string</code> | The utf-8 content of the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Specifies presentational information for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | The natural language or languages of the intended audience for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires">expires</a></code> | <code>string</code> | The date and time at which the object is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to delete the object even if it has a governance-type Object Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | A map of metadata to store with the object in IONOS Object Storage Object Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa">mfa</a></code> | <code>string</code> | The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>string</code> | Specifies whether a legal hold will be applied to this object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | The date and time when you want this object's Object Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer">requestPayer</a></code> | <code>string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext">serverSideEncryptionContext</a></code> | <code>string</code> | Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | Specifies the algorithm to use to when encrypting the object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>string</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source">source</a></code> | <code>string</code> | The path to the file to upload. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The storage class of the object. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tag-set for the object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#bucket S3Object#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#key S3Object#key}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#cache_control S3Object#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The utf-8 content of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content S3Object#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Specifies presentational information for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_disposition S3Object#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_encoding S3Object#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

The natural language or languages of the intended audience for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_language S3Object#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#content_type S3Object#content_type}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

The date and time at which the object is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#expires S3Object#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to delete the object even if it has a governance-type Object Lock in place.

You must explicitly pass a value of true for this parameter to delete the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#force_destroy S3Object#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of metadata to store with the object in IONOS Object Storage Object Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#metadata S3Object#metadata}

---

##### `mfa`<sup>Optional</sup> <a name="mfa" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.mfa"></a>

```typescript
public readonly mfa: string;
```

- *Type:* string

The concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.

Required to permanently delete a versioned object if versioning is configured with MFA Delete enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#mfa S3Object#mfa}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockLegalHold"></a>

```typescript
public readonly objectLockLegalHold: string;
```

- *Type:* string

Specifies whether a legal hold will be applied to this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_legal_hold S3Object#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_mode S3Object#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

The date and time when you want this object's Object Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#object_lock_retain_until_date S3Object#object_lock_retain_until_date}

---

##### `requestPayer`<sup>Optional</sup> <a name="requestPayer" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#request_payer S3Object#request_payer}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

The server-side encryption algorithm used when storing this object in IONOS Object Storage Object Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption S3Object#server_side_encryption}

---

##### `serverSideEncryptionContext`<sup>Optional</sup> <a name="serverSideEncryptionContext" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionContext"></a>

```typescript
public readonly serverSideEncryptionContext: string;
```

- *Type:* string

Specifies the IONOS Object Storage Object Storage Encryption Context to use for object encryption.

The value of this header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_context S3Object#server_side_encryption_context}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithm: string;
```

- *Type:* string

Specifies the algorithm to use to when encrypting the object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_algorithm S3Object#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKey"></a>

```typescript
public readonly serverSideEncryptionCustomerKey: string;
```

- *Type:* string

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key S3Object#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5: string;
```

- *Type:* string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#server_side_encryption_customer_key_md5 S3Object#server_side_encryption_customer_key_md5}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The path to the file to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#source S3Object#source}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The storage class of the object. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#storage_class S3Object#storage_class}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tag-set for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#tags S3Object#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3Object.S3ObjectConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

If the bucket is configured as a website, redirects requests for this object to another object in the same bucket or to an external URL.

IONOS Object Storage Object Storage stores the value of this header in the object metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.3/docs/resources/s3_object#website_redirect S3Object#website_redirect}

---



