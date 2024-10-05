# `networkloadbalancer` Submodule <a name="`networkloadbalancer` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Networkloadbalancer <a name="Networkloadbalancer" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer ionoscloud_networkloadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

new networkloadbalancer.Networkloadbalancer(scope: Construct, id: string, config: NetworkloadbalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig">NetworkloadbalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig">NetworkloadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog">putFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetCentralLogging">resetCentralLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetFlowlog">resetFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps">resetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLoggingFormat">resetLoggingFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlowlog` <a name="putFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog"></a>

```typescript
public putFlowlog(value: NetworkloadbalancerFlowlog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putFlowlog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkloadbalancerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

---

##### `resetCentralLogging` <a name="resetCentralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetCentralLogging"></a>

```typescript
public resetCentralLogging(): void
```

##### `resetFlowlog` <a name="resetFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetFlowlog"></a>

```typescript
public resetFlowlog(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetIps"></a>

```typescript
public resetIps(): void
```

##### `resetLbPrivateIps` <a name="resetLbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLbPrivateIps"></a>

```typescript
public resetLbPrivateIps(): void
```

##### `resetLoggingFormat` <a name="resetLoggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetLoggingFormat"></a>

```typescript
public resetLoggingFormat(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Networkloadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

networkloadbalancer.Networkloadbalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

networkloadbalancer.Networkloadbalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

networkloadbalancer.Networkloadbalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

networkloadbalancer.Networkloadbalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Networkloadbalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Networkloadbalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Networkloadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Networkloadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference">NetworkloadbalancerFlowlogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLoggingInput">centralLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlogInput">flowlogInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput">ipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput">lbPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput">listenerLanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormatInput">loggingFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput">targetLanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLogging">centralLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps">lbPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan">listenerLan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormat">loggingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan">targetLan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flowlog`<sup>Required</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlog"></a>

```typescript
public readonly flowlog: NetworkloadbalancerFlowlogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference">NetworkloadbalancerFlowlogOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkloadbalancerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference">NetworkloadbalancerTimeoutsOutputReference</a>

---

##### `centralLoggingInput`<sup>Optional</sup> <a name="centralLoggingInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLoggingInput"></a>

```typescript
public readonly centralLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `flowlogInput`<sup>Optional</sup> <a name="flowlogInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.flowlogInput"></a>

```typescript
public readonly flowlogInput: NetworkloadbalancerFlowlog;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ipsInput"></a>

```typescript
public readonly ipsInput: string[];
```

- *Type:* string[]

---

##### `lbPrivateIpsInput`<sup>Optional</sup> <a name="lbPrivateIpsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIpsInput"></a>

```typescript
public readonly lbPrivateIpsInput: string[];
```

- *Type:* string[]

---

##### `listenerLanInput`<sup>Optional</sup> <a name="listenerLanInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLanInput"></a>

```typescript
public readonly listenerLanInput: number;
```

- *Type:* number

---

##### `loggingFormatInput`<sup>Optional</sup> <a name="loggingFormatInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormatInput"></a>

```typescript
public readonly loggingFormatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `targetLanInput`<sup>Optional</sup> <a name="targetLanInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLanInput"></a>

```typescript
public readonly targetLanInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkloadbalancerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

---

##### `centralLogging`<sup>Required</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.centralLogging"></a>

```typescript
public readonly centralLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `lbPrivateIps`<sup>Required</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.lbPrivateIps"></a>

```typescript
public readonly lbPrivateIps: string[];
```

- *Type:* string[]

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.listenerLan"></a>

```typescript
public readonly listenerLan: number;
```

- *Type:* number

---

##### `loggingFormat`<sup>Required</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.targetLan"></a>

```typescript
public readonly targetLan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancer.Networkloadbalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerConfig <a name="NetworkloadbalancerConfig" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

const networkloadbalancerConfig: networkloadbalancer.NetworkloadbalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan">listenerLan</a></code> | <code>number</code> | Id of the listening LAN. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name">name</a></code> | <code>string</code> | A name of that Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan">targetLan</a></code> | <code>number</code> | Id of the balanced private target LAN. (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.centralLogging">centralLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Turn logging on and off for this product. Default value is 'false'. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.flowlog">flowlog</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | flowlog block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#id Networkloadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips">ips</a></code> | <code>string[]</code> | Collection of IP addresses of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps">lbPrivateIps</a></code> | <code>string[]</code> | Collection of private IP addresses with subnet mask of the Network Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.loggingFormat">loggingFormat</a></code> | <code>string</code> | Specifies the format of the logs. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#datacenter_id Networkloadbalancer#datacenter_id}.

---

##### `listenerLan`<sup>Required</sup> <a name="listenerLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.listenerLan"></a>

```typescript
public readonly listenerLan: number;
```

- *Type:* number

Id of the listening LAN. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#listener_lan Networkloadbalancer#listener_lan}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name of that Network Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

##### `targetLan`<sup>Required</sup> <a name="targetLan" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.targetLan"></a>

```typescript
public readonly targetLan: number;
```

- *Type:* number

Id of the balanced private target LAN. (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#target_lan Networkloadbalancer#target_lan}

---

##### `centralLogging`<sup>Optional</sup> <a name="centralLogging" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.centralLogging"></a>

```typescript
public readonly centralLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Turn logging on and off for this product. Default value is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#central_logging Networkloadbalancer#central_logging}

---

##### `flowlog`<sup>Optional</sup> <a name="flowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.flowlog"></a>

```typescript
public readonly flowlog: NetworkloadbalancerFlowlog;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

flowlog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#flowlog Networkloadbalancer#flowlog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#id Networkloadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

Collection of IP addresses of the Network Load Balancer.

(inbound and outbound) IP of the listenerLan must be a customer reserved IP for the public load balancer and private IP for the private load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#ips Networkloadbalancer#ips}

---

##### `lbPrivateIps`<sup>Optional</sup> <a name="lbPrivateIps" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.lbPrivateIps"></a>

```typescript
public readonly lbPrivateIps: string[];
```

- *Type:* string[]

Collection of private IP addresses with subnet mask of the Network Load Balancer.

IPs must contain valid subnet mask. If user will not provide any IP then the system will generate one IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#lb_private_ips Networkloadbalancer#lb_private_ips}

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: string;
```

- *Type:* string

Specifies the format of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#logging_format Networkloadbalancer#logging_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkloadbalancerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#timeouts Networkloadbalancer#timeouts}

---

### NetworkloadbalancerFlowlog <a name="NetworkloadbalancerFlowlog" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

const networkloadbalancerFlowlog: networkloadbalancer.NetworkloadbalancerFlowlog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.action">action</a></code> | <code>string</code> | Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.bucket">bucket</a></code> | <code>string</code> | The S3 bucket name of an existing IONOS Cloud S3 bucket. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.direction">direction</a></code> | <code>string</code> | Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.name">name</a></code> | <code>string</code> | The resource name. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Specifies the traffic direction pattern. Valid values: ACCEPTED, REJECTED, ALL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#action Networkloadbalancer#action}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The S3 bucket name of an existing IONOS Cloud S3 bucket. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#bucket Networkloadbalancer#bucket}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Specifies the traffic direction pattern. Valid values: INGRESS, EGRESS, BIDIRECTIONAL. Immutable, forces re-recreation of the nic resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#direction Networkloadbalancer#direction}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#name Networkloadbalancer#name}

---

### NetworkloadbalancerTimeouts <a name="NetworkloadbalancerTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

const networkloadbalancerTimeouts: networkloadbalancer.NetworkloadbalancerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#create Networkloadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#default Networkloadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#update Networkloadbalancer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#create Networkloadbalancer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#default Networkloadbalancer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#delete Networkloadbalancer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/resources/networkloadbalancer#update Networkloadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerFlowlogOutputReference <a name="NetworkloadbalancerFlowlogOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

new networkloadbalancer.NetworkloadbalancerFlowlogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkloadbalancerFlowlog;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerFlowlog">NetworkloadbalancerFlowlog</a>

---


### NetworkloadbalancerTimeoutsOutputReference <a name="NetworkloadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkloadbalancer } from '@cdktf/provider-ionoscloud'

new networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkloadbalancerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.networkloadbalancer.NetworkloadbalancerTimeouts">NetworkloadbalancerTimeouts</a>

---



