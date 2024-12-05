# `vpnIpsecGateway` Submodule <a name="`vpnIpsecGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecGateway <a name="VpnIpsecGateway" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway ionoscloud_vpn_ipsec_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

new vpnIpsecGateway.VpnIpsecGateway(scope: Construct, id: string, config: VpnIpsecGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig">VpnIpsecGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig">VpnIpsecGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections"></a>

```typescript
public putConnections(value: IResolvable | VpnIpsecGatewayConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: VpnIpsecGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

vpnIpsecGateway.VpnIpsecGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

vpnIpsecGateway.VpnIpsecGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

vpnIpsecGateway.VpnIpsecGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnIpsecGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnIpsecGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput">connectionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections"></a>

```typescript
public readonly connections: VpnIpsecGatewayConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts"></a>

```typescript
public readonly timeouts: VpnIpsecGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | VpnIpsecGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpnIpsecGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecGatewayConfig <a name="VpnIpsecGatewayConfig" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

const vpnIpsecGatewayConfig: vpnIpsecGateway.VpnIpsecGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections">connections</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]</code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Public IP address to be assigned to the gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location">location</a></code> | <code>string</code> | The location of the IPSec Gateway. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name">name</a></code> | <code>string</code> | The human readable name of your IPSecGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description">description</a></code> | <code>string</code> | The human-readable description of your IPSec Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version">version</a></code> | <code>string</code> | The IKE version that is permitted for the VPN tunnels. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections"></a>

```typescript
public readonly connections: IResolvable | VpnIpsecGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#connections VpnIpsecGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Public IP address to be assigned to the gateway.

Note: This must be an IP address in the same datacenter as the connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#gateway_ip VpnIpsecGateway#gateway_ip}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the IPSec Gateway. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#location VpnIpsecGateway#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The human readable name of your IPSecGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#name VpnIpsecGateway#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The human-readable description of your IPSec Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#description VpnIpsecGateway#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpnIpsecGatewayTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#timeouts VpnIpsecGateway#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The IKE version that is permitted for the VPN tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#version VpnIpsecGateway#version}

---

### VpnIpsecGatewayConnections <a name="VpnIpsecGatewayConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

const vpnIpsecGatewayConnections: vpnIpsecGateway.VpnIpsecGatewayConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId">datacenterId</a></code> | <code>string</code> | The datacenter to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string</code> | Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId">lanId</a></code> | <code>string</code> | The numeric LAN ID to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway. |

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The datacenter to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#datacenter_id VpnIpsecGateway#datacenter_id}

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string;
```

- *Type:* string

Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#ipv4_cidr VpnIpsecGateway#ipv4_cidr}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

The numeric LAN ID to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#lan_id VpnIpsecGateway#lan_id}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#ipv6_cidr VpnIpsecGateway#ipv6_cidr}

---

### VpnIpsecGatewayTimeouts <a name="VpnIpsecGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

const vpnIpsecGatewayTimeouts: vpnIpsecGateway.VpnIpsecGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecGatewayConnectionsList <a name="VpnIpsecGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

new vpnIpsecGateway.VpnIpsecGatewayConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get"></a>

```typescript
public get(index: number): VpnIpsecGatewayConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecGatewayConnections[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>[]

---


### VpnIpsecGatewayConnectionsOutputReference <a name="VpnIpsecGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

new vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```typescript
public resetIpv6Cidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput">ipv4CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `ipv4CidrInput`<sup>Optional</sup> <a name="ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```typescript
public readonly ipv4CidrInput: string;
```

- *Type:* string

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```typescript
public readonly ipv6CidrInput: string;
```

- *Type:* string

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput"></a>

```typescript
public readonly lanIdInput: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```typescript
public readonly ipv4Cidr: string;
```

- *Type:* string

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```typescript
public readonly ipv6Cidr: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecGatewayConnections;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>

---


### VpnIpsecGatewayTimeoutsOutputReference <a name="VpnIpsecGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpnIpsecGateway } from '@cdktf/provider-ionoscloud'

new vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpnIpsecGatewayTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---



