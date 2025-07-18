# `cdnDistribution` Submodule <a name="`cdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.cdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnDistribution <a name="CdnDistribution" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistribution(scope: Construct, id: string, config: CdnDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules">putRoutingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoutingRules` <a name="putRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules"></a>

```typescript
public putRoutingRules(value: IResolvable | CdnDistributionRoutingRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts"></a>

```typescript
public putTimeouts(value: CdnDistributionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---

##### `resetCertificateId` <a name="resetCertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

cdnDistribution.CdnDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

cdnDistribution.CdnDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

cdnDistribution.CdnDistribution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

cdnDistribution.CdnDistribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4">publicEndpointV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6">publicEndpointV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn">resourceUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules">routingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput">routingRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publicEndpointV4`<sup>Required</sup> <a name="publicEndpointV4" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4"></a>

```typescript
public readonly publicEndpointV4: string;
```

- *Type:* string

---

##### `publicEndpointV6`<sup>Required</sup> <a name="publicEndpointV6" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6"></a>

```typescript
public readonly publicEndpointV6: string;
```

- *Type:* string

---

##### `resourceUrn`<sup>Required</sup> <a name="resourceUrn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn"></a>

```typescript
public readonly resourceUrn: string;
```

- *Type:* string

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules"></a>

```typescript
public readonly routingRules: CdnDistributionRoutingRulesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts"></a>

```typescript
public readonly timeouts: CdnDistributionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a>

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routingRulesInput`<sup>Optional</sup> <a name="routingRulesInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput"></a>

```typescript
public readonly routingRulesInput: IResolvable | CdnDistributionRoutingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CdnDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnDistributionConfig <a name="CdnDistributionConfig" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

const cdnDistributionConfig: cdnDistribution.CdnDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain">domain</a></code> | <code>string</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules">routingRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]</code> | routing_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId">certificateId</a></code> | <code>string</code> | The ID of the certificate to use for the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#id CdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#domain CdnDistribution#domain}

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules"></a>

```typescript
public readonly routingRules: IResolvable | CdnDistributionRoutingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]

routing_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

The ID of the certificate to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#id CdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CdnDistributionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}

---

### CdnDistributionRoutingRules <a name="CdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

const cdnDistributionRoutingRules: cdnDistribution.CdnDistributionRoutingRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix">prefix</a></code> | <code>string</code> | The prefix of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme">scheme</a></code> | <code>string</code> | The scheme of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | upstream block. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The prefix of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#prefix CdnDistribution#prefix}

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

The scheme of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#scheme CdnDistribution#scheme}

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream"></a>

```typescript
public readonly upstream: CdnDistributionRoutingRulesUpstream;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#upstream CdnDistribution#upstream}

---

### CdnDistributionRoutingRulesUpstream <a name="CdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

const cdnDistributionRoutingRulesUpstream: cdnDistribution.CdnDistributionRoutingRulesUpstream = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching">caching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable caching. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host">host</a></code> | <code>string</code> | The upstream host that handles the requests if not already cached. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass">rateLimitClass</a></code> | <code>string</code> | Rate limit class that will be applied to limit the number of incoming requests per IP. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode">sniMode</a></code> | <code>string</code> | The SNI (Server Name Indication) mode of the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf">waf</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable WAF to protect the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | geo_restrictions block. |

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching"></a>

```typescript
public readonly caching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable caching.

If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#caching CdnDistribution#caching}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The upstream host that handles the requests if not already cached.

This host will be protected by the WAF if the option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#host CdnDistribution#host}

---

##### `rateLimitClass`<sup>Required</sup> <a name="rateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass"></a>

```typescript
public readonly rateLimitClass: string;
```

- *Type:* string

Rate limit class that will be applied to limit the number of incoming requests per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}

---

##### `sniMode`<sup>Required</sup> <a name="sniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode"></a>

```typescript
public readonly sniMode: string;
```

- *Type:* string

The SNI (Server Name Indication) mode of the upstream host.

It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf"></a>

```typescript
public readonly waf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable WAF to protect the upstream host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#waf CdnDistribution#waf}

---

##### `geoRestrictions`<sup>Optional</sup> <a name="geoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

geo_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}

---

### CdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

const cdnDistributionRoutingRulesUpstreamGeoRestrictions: cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList">allowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList">blockList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}. |

---

##### `allowList`<sup>Optional</sup> <a name="allowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList"></a>

```typescript
public readonly allowList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}.

---

##### `blockList`<sup>Optional</sup> <a name="blockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList"></a>

```typescript
public readonly blockList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}.

---

### CdnDistributionTimeouts <a name="CdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

const cdnDistributionTimeouts: cdnDistribution.CdnDistributionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#create CdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#default CdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#delete CdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#update CdnDistribution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#create CdnDistribution#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#default CdnDistribution#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#delete CdnDistribution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/cdn_distribution#update CdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnDistributionRoutingRulesList <a name="CdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistributionRoutingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get"></a>

```typescript
public get(index: number): CdnDistributionRoutingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnDistributionRoutingRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>[]

---


### CdnDistributionRoutingRulesOutputReference <a name="CdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistributionRoutingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream">putUpstream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUpstream` <a name="putUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream"></a>

```typescript
public putUpstream(value: CdnDistributionRoutingRulesUpstream): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput">upstreamInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```typescript
public readonly upstream: CdnDistributionRoutingRulesUpstreamOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `upstreamInput`<sup>Optional</sup> <a name="upstreamInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput"></a>

```typescript
public readonly upstreamInput: CdnDistributionRoutingRulesUpstream;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnDistributionRoutingRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules">CdnDistributionRoutingRules</a>

---


### CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList">resetAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList">resetBlockList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowList` <a name="resetAllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList"></a>

```typescript
public resetAllowList(): void
```

##### `resetBlockList` <a name="resetBlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList"></a>

```typescript
public resetBlockList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput">allowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput">blockListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">allowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">blockList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowListInput`<sup>Optional</sup> <a name="allowListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput"></a>

```typescript
public readonly allowListInput: string[];
```

- *Type:* string[]

---

##### `blockListInput`<sup>Optional</sup> <a name="blockListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput"></a>

```typescript
public readonly blockListInput: string[];
```

- *Type:* string[]

---

##### `allowList`<sup>Required</sup> <a name="allowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```typescript
public readonly allowList: string[];
```

- *Type:* string[]

---

##### `blockList`<sup>Required</sup> <a name="blockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```typescript
public readonly blockList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnDistributionRoutingRulesUpstreamGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### CdnDistributionRoutingRulesUpstreamOutputReference <a name="CdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions">putGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions">resetGeoRestrictions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGeoRestrictions` <a name="putGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions"></a>

```typescript
public putGeoRestrictions(value: CdnDistributionRoutingRulesUpstreamGeoRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `resetGeoRestrictions` <a name="resetGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions"></a>

```typescript
public resetGeoRestrictions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput">cachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput">geoRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput">rateLimitClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput">sniModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput">wafInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching">caching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">rateLimitClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode">sniMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf">waf</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a>

---

##### `cachingInput`<sup>Optional</sup> <a name="cachingInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput"></a>

```typescript
public readonly cachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geoRestrictionsInput`<sup>Optional</sup> <a name="geoRestrictionsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput"></a>

```typescript
public readonly geoRestrictionsInput: CdnDistributionRoutingRulesUpstreamGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `rateLimitClassInput`<sup>Optional</sup> <a name="rateLimitClassInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput"></a>

```typescript
public readonly rateLimitClassInput: string;
```

- *Type:* string

---

##### `sniModeInput`<sup>Optional</sup> <a name="sniModeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput"></a>

```typescript
public readonly sniModeInput: string;
```

- *Type:* string

---

##### `wafInput`<sup>Optional</sup> <a name="wafInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput"></a>

```typescript
public readonly wafInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```typescript
public readonly caching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `rateLimitClass`<sup>Required</sup> <a name="rateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```typescript
public readonly rateLimitClass: string;
```

- *Type:* string

---

##### `sniMode`<sup>Required</sup> <a name="sniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode"></a>

```typescript
public readonly sniMode: string;
```

- *Type:* string

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```typescript
public readonly waf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CdnDistributionRoutingRulesUpstream;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


### CdnDistributionTimeoutsOutputReference <a name="CdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer"></a>

```typescript
import { cdnDistribution } from '@cdktf/provider-ionoscloud'

new cdnDistribution.CdnDistributionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CdnDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---



