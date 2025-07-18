# `s3BucketWebsiteConfiguration` Submodule <a name="`s3BucketWebsiteConfiguration` Submodule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketWebsiteConfiguration <a name="S3BucketWebsiteConfiguration" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration ionoscloud_s3_bucket_website_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration(scope: Construct, id: string, config: S3BucketWebsiteConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig">S3BucketWebsiteConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig">S3BucketWebsiteConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument">putErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument">putIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo">putRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule">putRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument">resetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo">resetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule">resetRoutingRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putErrorDocument` <a name="putErrorDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument"></a>

```typescript
public putErrorDocument(value: S3BucketWebsiteConfigurationErrorDocument): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putErrorDocument.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---

##### `putIndexDocument` <a name="putIndexDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument"></a>

```typescript
public putIndexDocument(value: S3BucketWebsiteConfigurationIndexDocument): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putIndexDocument.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---

##### `putRedirectAllRequestsTo` <a name="putRedirectAllRequestsTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo"></a>

```typescript
public putRedirectAllRequestsTo(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRedirectAllRequestsTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---

##### `putRoutingRule` <a name="putRoutingRule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule"></a>

```typescript
public putRoutingRule(value: IResolvable | S3BucketWebsiteConfigurationRoutingRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.putRoutingRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---

##### `resetErrorDocument` <a name="resetErrorDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetErrorDocument"></a>

```typescript
public resetErrorDocument(): void
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetIndexDocument"></a>

```typescript
public resetIndexDocument(): void
```

##### `resetRedirectAllRequestsTo` <a name="resetRedirectAllRequestsTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRedirectAllRequestsTo"></a>

```typescript
public resetRedirectAllRequestsTo(): void
```

##### `resetRoutingRule` <a name="resetRoutingRule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.resetRoutingRule"></a>

```typescript
public resetRoutingRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketWebsiteConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3BucketWebsiteConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketWebsiteConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketWebsiteConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketWebsiteConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument">errorDocument</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument">indexDocument</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule">routingRule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput">errorDocumentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput">indexDocumentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput">redirectAllRequestsToInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput">routingRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorDocument`<sup>Required</sup> <a name="errorDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocument"></a>

```typescript
public readonly errorDocument: S3BucketWebsiteConfigurationErrorDocumentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference">S3BucketWebsiteConfigurationErrorDocumentOutputReference</a>

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocument"></a>

```typescript
public readonly indexDocument: S3BucketWebsiteConfigurationIndexDocumentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference">S3BucketWebsiteConfigurationIndexDocumentOutputReference</a>

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference">S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference</a>

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRule"></a>

```typescript
public readonly routingRule: S3BucketWebsiteConfigurationRoutingRuleList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList">S3BucketWebsiteConfigurationRoutingRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `errorDocumentInput`<sup>Optional</sup> <a name="errorDocumentInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.errorDocumentInput"></a>

```typescript
public readonly errorDocumentInput: IResolvable | S3BucketWebsiteConfigurationErrorDocument;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.indexDocumentInput"></a>

```typescript
public readonly indexDocumentInput: IResolvable | S3BucketWebsiteConfigurationIndexDocument;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---

##### `redirectAllRequestsToInput`<sup>Optional</sup> <a name="redirectAllRequestsToInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.redirectAllRequestsToInput"></a>

```typescript
public readonly redirectAllRequestsToInput: IResolvable | S3BucketWebsiteConfigurationRedirectAllRequestsTo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---

##### `routingRuleInput`<sup>Optional</sup> <a name="routingRuleInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.routingRuleInput"></a>

```typescript
public readonly routingRuleInput: IResolvable | S3BucketWebsiteConfigurationRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketWebsiteConfigurationConfig <a name="S3BucketWebsiteConfigurationConfig" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationConfig: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket">bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument">errorDocument</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | error_document block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument">indexDocument</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | index_document block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | redirect_all_requests_to block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule">routingRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | routing_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}

---

##### `errorDocument`<sup>Optional</sup> <a name="errorDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.errorDocument"></a>

```typescript
public readonly errorDocument: S3BucketWebsiteConfigurationErrorDocument;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

error_document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.indexDocument"></a>

```typescript
public readonly indexDocument: S3BucketWebsiteConfigurationIndexDocument;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

index_document block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.redirectAllRequestsTo"></a>

```typescript
public readonly redirectAllRequestsTo: S3BucketWebsiteConfigurationRedirectAllRequestsTo;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

redirect_all_requests_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}

---

##### `routingRule`<sup>Optional</sup> <a name="routingRule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationConfig.property.routingRule"></a>

```typescript
public readonly routingRule: IResolvable | S3BucketWebsiteConfigurationRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}

---

### S3BucketWebsiteConfigurationErrorDocument <a name="S3BucketWebsiteConfigurationErrorDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationErrorDocument: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key">key</a></code> | <code>string</code> | The object key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}

---

### S3BucketWebsiteConfigurationIndexDocument <a name="S3BucketWebsiteConfigurationIndexDocument" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationIndexDocument: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix">suffix</a></code> | <code>string</code> | A suffix that is appended to a request that is for a directory on the website endpoint (for example, if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. |

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

A suffix that is appended to a request that is for a directory on the website endpoint (for example, if the suffix is index.html and you make a request to samplebucket/images/ the data that is returned will be for the object with the key name images/index.html) The suffix must not be empty and must not include a slash character. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}

---

### S3BucketWebsiteConfigurationRedirectAllRequestsTo <a name="S3BucketWebsiteConfigurationRedirectAllRequestsTo" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationRedirectAllRequestsTo: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName">hostName</a></code> | <code>string</code> | The host name to use in the redirect request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol">protocol</a></code> | <code>string</code> | Protocol to use when redirecting requests. The default is the protocol that is used in the original request. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

The host name to use in the redirect request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Protocol to use when redirecting requests. The default is the protocol that is used in the original request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}

---

### S3BucketWebsiteConfigurationRoutingRule <a name="S3BucketWebsiteConfigurationRoutingRule" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationRoutingRule: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | redirect block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.condition"></a>

```typescript
public readonly condition: S3BucketWebsiteConfigurationRoutingRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule.property.redirect"></a>

```typescript
public readonly redirect: S3BucketWebsiteConfigurationRoutingRuleRedirect;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}

---

### S3BucketWebsiteConfigurationRoutingRuleCondition <a name="S3BucketWebsiteConfigurationRoutingRuleCondition" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationRoutingRuleCondition: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals">httpErrorCodeReturnedEquals</a></code> | <code>string</code> | The HTTP error code when the redirect is applied. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals">keyPrefixEquals</a></code> | <code>string</code> | The object key name prefix when the redirect is applied. |

---

##### `httpErrorCodeReturnedEquals`<sup>Optional</sup> <a name="httpErrorCodeReturnedEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.httpErrorCodeReturnedEquals"></a>

```typescript
public readonly httpErrorCodeReturnedEquals: string;
```

- *Type:* string

The HTTP error code when the redirect is applied.

In the event of an error, if the error code equals this value, then the specified redirect is applied. Required when parent element Condition is specified and sibling KeyPrefixEquals is not specified. If both are specified, then both must be true for the redirect to be applied

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}

---

##### `keyPrefixEquals`<sup>Optional</sup> <a name="keyPrefixEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition.property.keyPrefixEquals"></a>

```typescript
public readonly keyPrefixEquals: string;
```

- *Type:* string

The object key name prefix when the redirect is applied.

For example, to redirect requests for `ExamplePage.html`, the key prefix will be `ExamplePage.html`. To redirect request for all pages with the prefix `docs/`, the key prefix will be `/docs`, which identifies all objects in the `docs/` folder. Required when the parent element `Condition` is specified and sibling `HTTPErrorCodeReturnedEquals` is not specified. If both conditions are specified, both must be true for the redirect to be applied. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}

---

### S3BucketWebsiteConfigurationRoutingRuleRedirect <a name="S3BucketWebsiteConfigurationRoutingRuleRedirect" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

const s3BucketWebsiteConfigurationRoutingRuleRedirect: s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName">hostName</a></code> | <code>string</code> | The host name to use in the redirect request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode">httpRedirectCode</a></code> | <code>string</code> | The HTTP redirect code to use on the response. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol">protocol</a></code> | <code>string</code> | The protocol to use in the redirect request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith">replaceKeyPrefixWith</a></code> | <code>string</code> | The object key prefix to use in the redirect request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith">replaceKeyWith</a></code> | <code>string</code> | The specific object key to use in the redirect request. |

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

The host name to use in the redirect request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}

---

##### `httpRedirectCode`<sup>Optional</sup> <a name="httpRedirectCode" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.httpRedirectCode"></a>

```typescript
public readonly httpRedirectCode: string;
```

- *Type:* string

The HTTP redirect code to use on the response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol to use in the redirect request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}

---

##### `replaceKeyPrefixWith`<sup>Optional</sup> <a name="replaceKeyPrefixWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyPrefixWith"></a>

```typescript
public readonly replaceKeyPrefixWith: string;
```

- *Type:* string

The object key prefix to use in the redirect request.

For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/`, you can set a condition block with `KeyPrefixEquals` set to `docs/` and in the Redirect set `ReplaceKeyPrefixWith` to `/documents`. Not required if one of the siblings is present. Can be present only if `ReplaceKeyWith` is not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}

---

##### `replaceKeyWith`<sup>Optional</sup> <a name="replaceKeyWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect.property.replaceKeyWith"></a>

```typescript
public readonly replaceKeyWith: string;
```

- *Type:* string

The specific object key to use in the redirect request.

For example, redirect request to error.html. Not required if one of the siblings is present. Can be present only if ReplaceKeyPrefixWith is not provided. Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketWebsiteConfigurationErrorDocumentOutputReference <a name="S3BucketWebsiteConfigurationErrorDocumentOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationErrorDocument;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationErrorDocument">S3BucketWebsiteConfigurationErrorDocument</a>

---


### S3BucketWebsiteConfigurationIndexDocumentOutputReference <a name="S3BucketWebsiteConfigurationIndexDocumentOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationIndexDocument;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationIndexDocument">S3BucketWebsiteConfigurationIndexDocument</a>

---


### S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference <a name="S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostName` <a name="resetHostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationRedirectAllRequestsTo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRedirectAllRequestsTo">S3BucketWebsiteConfigurationRedirectAllRequestsTo</a>

---


### S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals">resetHttpErrorCodeReturnedEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals">resetKeyPrefixEquals</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpErrorCodeReturnedEquals` <a name="resetHttpErrorCodeReturnedEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetHttpErrorCodeReturnedEquals"></a>

```typescript
public resetHttpErrorCodeReturnedEquals(): void
```

##### `resetKeyPrefixEquals` <a name="resetKeyPrefixEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.resetKeyPrefixEquals"></a>

```typescript
public resetKeyPrefixEquals(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput">httpErrorCodeReturnedEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput">keyPrefixEqualsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals">httpErrorCodeReturnedEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals">keyPrefixEquals</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpErrorCodeReturnedEqualsInput`<sup>Optional</sup> <a name="httpErrorCodeReturnedEqualsInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEqualsInput"></a>

```typescript
public readonly httpErrorCodeReturnedEqualsInput: string;
```

- *Type:* string

---

##### `keyPrefixEqualsInput`<sup>Optional</sup> <a name="keyPrefixEqualsInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEqualsInput"></a>

```typescript
public readonly keyPrefixEqualsInput: string;
```

- *Type:* string

---

##### `httpErrorCodeReturnedEquals`<sup>Required</sup> <a name="httpErrorCodeReturnedEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.httpErrorCodeReturnedEquals"></a>

```typescript
public readonly httpErrorCodeReturnedEquals: string;
```

- *Type:* string

---

##### `keyPrefixEquals`<sup>Required</sup> <a name="keyPrefixEquals" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.keyPrefixEquals"></a>

```typescript
public readonly keyPrefixEquals: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationRoutingRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---


### S3BucketWebsiteConfigurationRoutingRuleList <a name="S3BucketWebsiteConfigurationRoutingRuleList" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get"></a>

```typescript
public get(index: number): S3BucketWebsiteConfigurationRoutingRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationRoutingRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>[]

---


### S3BucketWebsiteConfigurationRoutingRuleOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition"></a>

```typescript
public putCondition(value: S3BucketWebsiteConfigurationRoutingRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect"></a>

```typescript
public putRedirect(value: S3BucketWebsiteConfigurationRoutingRuleRedirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.resetRedirect"></a>

```typescript
public resetRedirect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput">redirectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference">S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirect"></a>

```typescript
public readonly redirect: S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference">S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | S3BucketWebsiteConfigurationRoutingRuleCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleCondition">S3BucketWebsiteConfigurationRoutingRuleCondition</a>

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.redirectInput"></a>

```typescript
public readonly redirectInput: IResolvable | S3BucketWebsiteConfigurationRoutingRuleRedirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationRoutingRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRule">S3BucketWebsiteConfigurationRoutingRule</a>

---


### S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference <a name="S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer"></a>

```typescript
import { s3BucketWebsiteConfiguration } from '@cdktf/provider-ionoscloud'

new s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode">resetHttpRedirectCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith">resetReplaceKeyPrefixWith</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith">resetReplaceKeyWith</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostName` <a name="resetHostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetHttpRedirectCode` <a name="resetHttpRedirectCode" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetHttpRedirectCode"></a>

```typescript
public resetHttpRedirectCode(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetReplaceKeyPrefixWith` <a name="resetReplaceKeyPrefixWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyPrefixWith"></a>

```typescript
public resetReplaceKeyPrefixWith(): void
```

##### `resetReplaceKeyWith` <a name="resetReplaceKeyWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.resetReplaceKeyWith"></a>

```typescript
public resetReplaceKeyWith(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput">httpRedirectCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput">replaceKeyPrefixWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput">replaceKeyWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode">httpRedirectCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith">replaceKeyPrefixWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith">replaceKeyWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `httpRedirectCodeInput`<sup>Optional</sup> <a name="httpRedirectCodeInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCodeInput"></a>

```typescript
public readonly httpRedirectCodeInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `replaceKeyPrefixWithInput`<sup>Optional</sup> <a name="replaceKeyPrefixWithInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWithInput"></a>

```typescript
public readonly replaceKeyPrefixWithInput: string;
```

- *Type:* string

---

##### `replaceKeyWithInput`<sup>Optional</sup> <a name="replaceKeyWithInput" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWithInput"></a>

```typescript
public readonly replaceKeyWithInput: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `httpRedirectCode`<sup>Required</sup> <a name="httpRedirectCode" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.httpRedirectCode"></a>

```typescript
public readonly httpRedirectCode: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `replaceKeyPrefixWith`<sup>Required</sup> <a name="replaceKeyPrefixWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyPrefixWith"></a>

```typescript
public readonly replaceKeyPrefixWith: string;
```

- *Type:* string

---

##### `replaceKeyWith`<sup>Required</sup> <a name="replaceKeyWith" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.replaceKeyWith"></a>

```typescript
public readonly replaceKeyWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketWebsiteConfigurationRoutingRuleRedirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.s3BucketWebsiteConfiguration.S3BucketWebsiteConfigurationRoutingRuleRedirect">S3BucketWebsiteConfigurationRoutingRuleRedirect</a>

---



