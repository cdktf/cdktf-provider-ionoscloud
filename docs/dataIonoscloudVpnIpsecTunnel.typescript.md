# `dataIonoscloudVpnIpsecTunnel` Submodule <a name="`dataIonoscloudVpnIpsecTunnel` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudVpnIpsecTunnel <a name="DataIonoscloudVpnIpsecTunnel" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel(scope: Construct, id: string, config: DataIonoscloudVpnIpsecTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig">DataIonoscloudVpnIpsecTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig">DataIonoscloudVpnIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudVpnIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isConstruct"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformElement"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudVpnIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudVpnIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudVpnIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudVpnIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList">DataIonoscloudVpnIpsecTunnelAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.esp">esp</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList">DataIonoscloudVpnIpsecTunnelEspList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList">DataIonoscloudVpnIpsecTunnelIkeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.remoteHost">remoteHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.auth"></a>

```typescript
public readonly auth: DataIonoscloudVpnIpsecTunnelAuthList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList">DataIonoscloudVpnIpsecTunnelAuthList</a>

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.cloudNetworkCidrs"></a>

```typescript
public readonly cloudNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.esp"></a>

```typescript
public readonly esp: DataIonoscloudVpnIpsecTunnelEspList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList">DataIonoscloudVpnIpsecTunnelEspList</a>

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.ike"></a>

```typescript
public readonly ike: DataIonoscloudVpnIpsecTunnelIkeList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList">DataIonoscloudVpnIpsecTunnelIkeList</a>

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.peerNetworkCidrs"></a>

```typescript
public readonly peerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.remoteHost"></a>

```typescript
public readonly remoteHost: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudVpnIpsecTunnelAuth <a name="DataIonoscloudVpnIpsecTunnelAuth" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuth.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const dataIonoscloudVpnIpsecTunnelAuth: dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuth = { ... }
```


### DataIonoscloudVpnIpsecTunnelConfig <a name="DataIonoscloudVpnIpsecTunnelConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const dataIonoscloudVpnIpsecTunnelConfig: dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.id">id</a></code> | <code>string</code> | The ID of the IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.location">location</a></code> | <code>string</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.name">name</a></code> | <code>string</code> | The human readable name of your IPSec Gateway Tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel#gateway_id DataIonoscloudVpnIpsecTunnel#gateway_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel#id DataIonoscloudVpnIpsecTunnel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel#location DataIonoscloudVpnIpsecTunnel#location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The human readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/data-sources/vpn_ipsec_tunnel#name DataIonoscloudVpnIpsecTunnel#name}

---

### DataIonoscloudVpnIpsecTunnelEsp <a name="DataIonoscloudVpnIpsecTunnelEsp" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEsp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEsp.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const dataIonoscloudVpnIpsecTunnelEsp: dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEsp = { ... }
```


### DataIonoscloudVpnIpsecTunnelIke <a name="DataIonoscloudVpnIpsecTunnelIke" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIke.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

const dataIonoscloudVpnIpsecTunnelIke: dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIke = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudVpnIpsecTunnelAuthList <a name="DataIonoscloudVpnIpsecTunnelAuthList" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.get"></a>

```typescript
public get(index: number): DataIonoscloudVpnIpsecTunnelAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudVpnIpsecTunnelAuthOutputReference <a name="DataIonoscloudVpnIpsecTunnelAuthOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuth">DataIonoscloudVpnIpsecTunnelAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudVpnIpsecTunnelAuth;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelAuth">DataIonoscloudVpnIpsecTunnelAuth</a>

---


### DataIonoscloudVpnIpsecTunnelEspList <a name="DataIonoscloudVpnIpsecTunnelEspList" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.get"></a>

```typescript
public get(index: number): DataIonoscloudVpnIpsecTunnelEspOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudVpnIpsecTunnelEspOutputReference <a name="DataIonoscloudVpnIpsecTunnelEspOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEsp">DataIonoscloudVpnIpsecTunnelEsp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEspOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudVpnIpsecTunnelEsp;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelEsp">DataIonoscloudVpnIpsecTunnelEsp</a>

---


### DataIonoscloudVpnIpsecTunnelIkeList <a name="DataIonoscloudVpnIpsecTunnelIkeList" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.get"></a>

```typescript
public get(index: number): DataIonoscloudVpnIpsecTunnelIkeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudVpnIpsecTunnelIkeOutputReference <a name="DataIonoscloudVpnIpsecTunnelIkeOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudVpnIpsecTunnel } from '@cdktf/provider-ionoscloud'

new dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIke">DataIonoscloudVpnIpsecTunnelIke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup"></a>

```typescript
public readonly diffieHellmanGroup: string;
```

- *Type:* string

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm"></a>

```typescript
public readonly integrityAlgorithm: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudVpnIpsecTunnelIke;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVpnIpsecTunnel.DataIonoscloudVpnIpsecTunnelIke">DataIonoscloudVpnIpsecTunnelIke</a>

---



