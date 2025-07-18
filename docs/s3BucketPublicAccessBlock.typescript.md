# `s3BucketPublicAccessBlock` Submodule <a name="`s3BucketPublicAccessBlock` Submodule" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketPublicAccessBlock <a name="S3BucketPublicAccessBlock" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block ionoscloud_s3_bucket_public_access_block}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

new s3BucketPublicAccessBlock.S3BucketPublicAccessBlock(scope: Construct, id: string, config: S3BucketPublicAccessBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig">S3BucketPublicAccessBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig">S3BucketPublicAccessBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetBlockPublicAcls"></a>

```typescript
public resetBlockPublicAcls(): void
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetBlockPublicPolicy"></a>

```typescript
public resetBlockPublicPolicy(): void
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetIgnorePublicAcls"></a>

```typescript
public resetIgnorePublicAcls(): void
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.resetRestrictPublicBuckets"></a>

```typescript
public resetRestrictPublicBuckets(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isConstruct"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformElement"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformResource"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3BucketPublicAccessBlock resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketPublicAccessBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketPublicAccessBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketPublicAccessBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicAclsInput"></a>

```typescript
public readonly blockPublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicPolicyInput"></a>

```typescript
public readonly blockPublicPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.ignorePublicAclsInput"></a>

```typescript
public readonly ignorePublicAclsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.restrictPublicBucketsInput"></a>

```typescript
public readonly restrictPublicBucketsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketPublicAccessBlockConfig <a name="S3BucketPublicAccessBlockConfig" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.Initializer"></a>

```typescript
import { s3BucketPublicAccessBlock } from '@cdktf/provider-ionoscloud'

const s3BucketPublicAccessBlockConfig: s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#bucket S3BucketPublicAccessBlock#bucket}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.blockPublicAcls">blockPublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#block_public_acls S3BucketPublicAccessBlock#block_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#block_public_policy S3BucketPublicAccessBlock#block_public_policy}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#ignore_public_acls S3BucketPublicAccessBlock#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#restrict_public_buckets S3BucketPublicAccessBlock#restrict_public_buckets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#bucket S3BucketPublicAccessBlock#bucket}.

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#block_public_acls S3BucketPublicAccessBlock#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#block_public_policy S3BucketPublicAccessBlock#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#ignore_public_acls S3BucketPublicAccessBlock#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-ionoscloud.s3BucketPublicAccessBlock.S3BucketPublicAccessBlockConfig.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_public_access_block#restrict_public_buckets S3BucketPublicAccessBlock#restrict_public_buckets}.

---



