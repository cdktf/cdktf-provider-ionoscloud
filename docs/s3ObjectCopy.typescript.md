# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-ionoscloud.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy ionoscloud_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

new s3ObjectCopy.S3ObjectCopy(scope: Construct, id: string, config: S3ObjectCopyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">resetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">resetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">resetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">resetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires">resetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">resetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold">resetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">resetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">resetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm">resetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey">resetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5">resetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">resetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">resetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">resetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass">resetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">resetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCopyIfMatch` <a name="resetCopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```typescript
public resetCopyIfMatch(): void
```

##### `resetCopyIfModifiedSince` <a name="resetCopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```typescript
public resetCopyIfModifiedSince(): void
```

##### `resetCopyIfNoneMatch` <a name="resetCopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```typescript
public resetCopyIfNoneMatch(): void
```

##### `resetCopyIfUnmodifiedSince` <a name="resetCopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```typescript
public resetCopyIfUnmodifiedSince(): void
```

##### `resetExpires` <a name="resetExpires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```typescript
public resetExpires(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMetadataDirective` <a name="resetMetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```typescript
public resetMetadataDirective(): void
```

##### `resetObjectLockLegalHold` <a name="resetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold"></a>

```typescript
public resetObjectLockLegalHold(): void
```

##### `resetObjectLockMode` <a name="resetObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```typescript
public resetObjectLockMode(): void
```

##### `resetObjectLockRetainUntilDate` <a name="resetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```typescript
public resetObjectLockRetainUntilDate(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetServerSideEncryptionCustomerAlgorithm` <a name="resetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm"></a>

```typescript
public resetServerSideEncryptionCustomerAlgorithm(): void
```

##### `resetServerSideEncryptionCustomerKey` <a name="resetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey"></a>

```typescript
public resetServerSideEncryptionCustomerKey(): void
```

##### `resetServerSideEncryptionCustomerKeyMd5` <a name="resetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5"></a>

```typescript
public resetServerSideEncryptionCustomerKeyMd5(): void
```

##### `resetSourceCustomerAlgorithm` <a name="resetSourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```typescript
public resetSourceCustomerAlgorithm(): void
```

##### `resetSourceCustomerKey` <a name="resetSourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```typescript
public resetSourceCustomerKey(): void
```

##### `resetSourceCustomerKeyMd5` <a name="resetSourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```typescript
public resetSourceCustomerKeyMd5(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```

##### `resetTaggingDirective` <a name="resetTaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```typescript
public resetTaggingDirective(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

s3ObjectCopy.S3ObjectCopy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

s3ObjectCopy.S3ObjectCopy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

s3ObjectCopy.S3ObjectCopy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

s3ObjectCopy.S3ObjectCopy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ObjectCopy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ObjectCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3ObjectCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">copyIfMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">copyIfModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">copyIfNoneMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">copyIfUnmodifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput">expiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">metadataDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput">objectLockLegalHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">objectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">objectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput">serverSideEncryptionCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput">serverSideEncryptionCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input">serverSideEncryptionCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">sourceCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">sourceCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">sourceCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">taggingDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">copyIfMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires">expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">metadataDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">taggingDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `copyIfMatchInput`<sup>Optional</sup> <a name="copyIfMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```typescript
public readonly copyIfMatchInput: string;
```

- *Type:* string

---

##### `copyIfModifiedSinceInput`<sup>Optional</sup> <a name="copyIfModifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```typescript
public readonly copyIfModifiedSinceInput: string;
```

- *Type:* string

---

##### `copyIfNoneMatchInput`<sup>Optional</sup> <a name="copyIfNoneMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```typescript
public readonly copyIfNoneMatchInput: string;
```

- *Type:* string

---

##### `copyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="copyIfUnmodifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```typescript
public readonly copyIfUnmodifiedSinceInput: string;
```

- *Type:* string

---

##### `expiresInput`<sup>Optional</sup> <a name="expiresInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```typescript
public readonly expiresInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `metadataDirectiveInput`<sup>Optional</sup> <a name="metadataDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```typescript
public readonly metadataDirectiveInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `objectLockLegalHoldInput`<sup>Optional</sup> <a name="objectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput"></a>

```typescript
public readonly objectLockLegalHoldInput: string;
```

- *Type:* string

---

##### `objectLockModeInput`<sup>Optional</sup> <a name="objectLockModeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```typescript
public readonly objectLockModeInput: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDateInput`<sup>Optional</sup> <a name="objectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```typescript
public readonly objectLockRetainUntilDateInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithmInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5Input: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: string;
```

- *Type:* string

---

##### `sourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="sourceCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```typescript
public readonly sourceCustomerAlgorithmInput: string;
```

- *Type:* string

---

##### `sourceCustomerKeyInput`<sup>Optional</sup> <a name="sourceCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```typescript
public readonly sourceCustomerKeyInput: string;
```

- *Type:* string

---

##### `sourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="sourceCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```typescript
public readonly sourceCustomerKeyMd5Input: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `taggingDirectiveInput`<sup>Optional</sup> <a name="taggingDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```typescript
public readonly taggingDirectiveInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `copyIfMatch`<sup>Required</sup> <a name="copyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```typescript
public readonly copyIfMatch: string;
```

- *Type:* string

---

##### `copyIfModifiedSince`<sup>Required</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```typescript
public readonly copyIfModifiedSince: string;
```

- *Type:* string

---

##### `copyIfNoneMatch`<sup>Required</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```typescript
public readonly copyIfNoneMatch: string;
```

- *Type:* string

---

##### `copyIfUnmodifiedSince`<sup>Required</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```typescript
public readonly copyIfUnmodifiedSince: string;
```

- *Type:* string

---

##### `expires`<sup>Required</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `metadataDirective`<sup>Required</sup> <a name="metadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```typescript
public readonly metadataDirective: string;
```

- *Type:* string

---

##### `objectLockLegalHold`<sup>Required</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold"></a>

```typescript
public readonly objectLockLegalHold: string;
```

- *Type:* string

---

##### `objectLockMode`<sup>Required</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

---

##### `objectLockRetainUntilDate`<sup>Required</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithm: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKey`<sup>Required</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey"></a>

```typescript
public readonly serverSideEncryptionCustomerKey: string;
```

- *Type:* string

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceCustomerAlgorithm`<sup>Required</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```typescript
public readonly sourceCustomerAlgorithm: string;
```

- *Type:* string

---

##### `sourceCustomerKey`<sup>Required</sup> <a name="sourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```typescript
public readonly sourceCustomerKey: string;
```

- *Type:* string

---

##### `sourceCustomerKeyMd5`<sup>Required</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```typescript
public readonly sourceCustomerKeyMd5: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `taggingDirective`<sup>Required</sup> <a name="taggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```typescript
public readonly taggingDirective: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```typescript
import { s3ObjectCopy } from '@cdktf/provider-ionoscloud'

const s3ObjectCopyConfig: s3ObjectCopy.S3ObjectCopyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key">key</a></code> | <code>string</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source">source</a></code> | <code>string</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">contentType</a></code> | <code>string</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">copyIfMatch</a></code> | <code>string</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">copyIfModifiedSince</a></code> | <code>string</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">copyIfNoneMatch</a></code> | <code>string</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">copyIfUnmodifiedSince</a></code> | <code>string</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires">expires</a></code> | <code>string</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | A map of metadata to store with the object copy in IONOS S3 Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">metadataDirective</a></code> | <code>string</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold">objectLockLegalHold</a></code> | <code>string</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">objectLockMode</a></code> | <code>string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">objectLockRetainUntilDate</a></code> | <code>string</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | The server-side encryption algorithm used when storing this object copy in IONOS S3 Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm">serverSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey">serverSideEncryptionCustomerKey</a></code> | <code>string</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5">serverSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">sourceCustomerAlgorithm</a></code> | <code>string</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">sourceCustomerKey</a></code> | <code>string</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">sourceCustomerKeyMd5</a></code> | <code>string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">storageClass</a></code> | <code>string</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">taggingDirective</a></code> | <code>string</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `copyIfMatch`<sup>Optional</sup> <a name="copyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```typescript
public readonly copyIfMatch: string;
```

- *Type:* string

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `copyIfModifiedSince`<sup>Optional</sup> <a name="copyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```typescript
public readonly copyIfModifiedSince: string;
```

- *Type:* string

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `copyIfNoneMatch`<sup>Optional</sup> <a name="copyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```typescript
public readonly copyIfNoneMatch: string;
```

- *Type:* string

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `copyIfUnmodifiedSince`<sup>Optional</sup> <a name="copyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```typescript
public readonly copyIfUnmodifiedSince: string;
```

- *Type:* string

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `expires`<sup>Optional</sup> <a name="expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```typescript
public readonly expires: string;
```

- *Type:* string

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of metadata to store with the object copy in IONOS S3 Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `metadataDirective`<sup>Optional</sup> <a name="metadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```typescript
public readonly metadataDirective: string;
```

- *Type:* string

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `objectLockLegalHold`<sup>Optional</sup> <a name="objectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold"></a>

```typescript
public readonly objectLockLegalHold: string;
```

- *Type:* string

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `objectLockMode`<sup>Optional</sup> <a name="objectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```typescript
public readonly objectLockMode: string;
```

- *Type:* string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `objectLockRetainUntilDate`<sup>Optional</sup> <a name="objectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```typescript
public readonly objectLockRetainUntilDate: string;
```

- *Type:* string

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

The server-side encryption algorithm used when storing this object copy in IONOS S3 Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `serverSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="serverSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```typescript
public readonly serverSideEncryptionCustomerAlgorithm: string;
```

- *Type:* string

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `serverSideEncryptionCustomerKey`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey"></a>

```typescript
public readonly serverSideEncryptionCustomerKey: string;
```

- *Type:* string

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `serverSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="serverSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```typescript
public readonly serverSideEncryptionCustomerKeyMd5: string;
```

- *Type:* string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS S3 Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `sourceCustomerAlgorithm`<sup>Optional</sup> <a name="sourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```typescript
public readonly sourceCustomerAlgorithm: string;
```

- *Type:* string

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `sourceCustomerKey`<sup>Optional</sup> <a name="sourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```typescript
public readonly sourceCustomerKey: string;
```

- *Type:* string

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `sourceCustomerKeyMd5`<sup>Optional</sup> <a name="sourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```typescript
public readonly sourceCustomerKeyMd5: string;
```

- *Type:* string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS S3 Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `taggingDirective`<sup>Optional</sup> <a name="taggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```typescript
public readonly taggingDirective: string;
```

- *Type:* string

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS S3 Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---



