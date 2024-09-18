# `vpnIpsecTunnel` Submodule <a name="`vpnIpsecTunnel` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecTunnel <a name="VpnIpsecTunnel" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnel(Construct Scope, string Id, VpnIpsecTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig">VpnIpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp">PutEsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke">PutIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth"></a>

```csharp
private void PutAuth(VpnIpsecTunnelAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `PutEsp` <a name="PutEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp"></a>

```csharp
private void PutEsp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp.parameter.value"></a>

- *Type:* object

---

##### `PutIke` <a name="PutIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke"></a>

```csharp
private void PutIke(VpnIpsecTunnelIke Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts"></a>

```csharp
private void PutTimeouts(VpnIpsecTunnelTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

VpnIpsecTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

VpnIpsecTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

VpnIpsecTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

VpnIpsecTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpnIpsecTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpnIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp">Esp</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike">Ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput">CloudNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput">EspInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput">IkeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput">PeerNetworkCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput">RemoteHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs">CloudNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost">RemoteHost</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth"></a>

```csharp
public VpnIpsecTunnelAuthOutputReference Auth { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a>

---

##### `Esp`<sup>Required</sup> <a name="Esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp"></a>

```csharp
public VpnIpsecTunnelEspList Esp { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a>

---

##### `Ike`<sup>Required</sup> <a name="Ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike"></a>

```csharp
public VpnIpsecTunnelIkeOutputReference Ike { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts"></a>

```csharp
public VpnIpsecTunnelTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput"></a>

```csharp
public VpnIpsecTunnelAuth AuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `CloudNetworkCidrsInput`<sup>Optional</sup> <a name="CloudNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput"></a>

```csharp
public string[] CloudNetworkCidrsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EspInput`<sup>Optional</sup> <a name="EspInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput"></a>

```csharp
public object EspInput { get; }
```

- *Type:* object

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkeInput`<sup>Optional</sup> <a name="IkeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput"></a>

```csharp
public VpnIpsecTunnelIke IkeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeerNetworkCidrsInput`<sup>Optional</sup> <a name="PeerNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput"></a>

```csharp
public string[] PeerNetworkCidrsInput { get; }
```

- *Type:* string[]

---

##### `RemoteHostInput`<sup>Optional</sup> <a name="RemoteHostInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput"></a>

```csharp
public string RemoteHostInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CloudNetworkCidrs`<sup>Required</sup> <a name="CloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs"></a>

```csharp
public string[] CloudNetworkCidrs { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs"></a>

```csharp
public string[] PeerNetworkCidrs { get; }
```

- *Type:* string[]

---

##### `RemoteHost`<sup>Required</sup> <a name="RemoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost"></a>

```csharp
public string RemoteHost { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecTunnelAuth <a name="VpnIpsecTunnelAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelAuth {
    string Method = null,
    string PskKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method">Method</a></code> | <code>string</code> | The Authentication Method to use for IPSec Authentication. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey">PskKey</a></code> | <code>string</code> | The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The Authentication Method to use for IPSec Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#method VpnIpsecTunnel#method}

---

##### `PskKey`<sup>Optional</sup> <a name="PskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey"></a>

```csharp
public string PskKey { get; set; }
```

- *Type:* string

The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#psk_key VpnIpsecTunnel#psk_key}

---

### VpnIpsecTunnelConfig <a name="VpnIpsecTunnelConfig" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    VpnIpsecTunnelAuth Auth,
    string[] CloudNetworkCidrs,
    object Esp,
    string GatewayId,
    VpnIpsecTunnelIke Ike,
    string Location,
    string Name,
    string[] PeerNetworkCidrs,
    string RemoteHost,
    string Description = null,
    string Id = null,
    VpnIpsecTunnelTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs">CloudNetworkCidrs</a></code> | <code>string[]</code> | The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp">Esp</a></code> | <code>object</code> | esp block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike">Ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | ike block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location">Location</a></code> | <code>string</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name">Name</a></code> | <code>string</code> | The human-readable name of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>string[]</code> | The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost">RemoteHost</a></code> | <code>string</code> | The remote peer host fully qualified domain name or public IPV4 IP to connect to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description">Description</a></code> | <code>string</code> | The human-readable description of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth"></a>

```csharp
public VpnIpsecTunnelAuth Auth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}

---

##### `CloudNetworkCidrs`<sup>Required</sup> <a name="CloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs"></a>

```csharp
public string[] CloudNetworkCidrs { get; set; }
```

- *Type:* string[]

The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}

---

##### `Esp`<sup>Required</sup> <a name="Esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp"></a>

```csharp
public object Esp { get; set; }
```

- *Type:* object

esp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}

---

##### `Ike`<sup>Required</sup> <a name="Ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike"></a>

```csharp
public VpnIpsecTunnelIke Ike { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

ike block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/txl.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The human-readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs"></a>

```csharp
public string[] PeerNetworkCidrs { get; set; }
```

- *Type:* string[]

The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel.

Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}

---

##### `RemoteHost`<sup>Required</sup> <a name="RemoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost"></a>

```csharp
public string RemoteHost { get; set; }
```

- *Type:* string

The remote peer host fully qualified domain name or public IPV4 IP to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The human-readable description of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts"></a>

```csharp
public VpnIpsecTunnelTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}

---

### VpnIpsecTunnelEsp <a name="VpnIpsecTunnelEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelEsp {
    string DiffieHellmanGroup = null,
    string EncryptionAlgorithm = null,
    string IntegrityAlgorithm = null,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime">Lifetime</a></code> | <code>double</code> | The phase lifetime in seconds. |

---

##### `DiffieHellmanGroup`<sup>Optional</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup"></a>

```csharp
public string DiffieHellmanGroup { get; set; }
```

- *Type:* string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `IntegrityAlgorithm`<sup>Optional</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm"></a>

```csharp
public string IntegrityAlgorithm { get; set; }
```

- *Type:* string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelIke <a name="VpnIpsecTunnelIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelIke {
    string DiffieHellmanGroup = null,
    string EncryptionAlgorithm = null,
    string IntegrityAlgorithm = null,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>string</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>string</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime">Lifetime</a></code> | <code>double</code> | The phase lifetime in seconds. |

---

##### `DiffieHellmanGroup`<sup>Optional</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup"></a>

```csharp
public string DiffieHellmanGroup { get; set; }
```

- *Type:* string

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `EncryptionAlgorithm`<sup>Optional</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; set; }
```

- *Type:* string

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `IntegrityAlgorithm`<sup>Optional</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm"></a>

```csharp
public string IntegrityAlgorithm { get; set; }
```

- *Type:* string

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelTimeouts <a name="VpnIpsecTunnelTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecTunnelAuthOutputReference <a name="VpnIpsecTunnelAuthOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey">ResetPskKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPskKey` <a name="ResetPskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey"></a>

```csharp
private void ResetPskKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput">PskKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey">PskKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PskKeyInput`<sup>Optional</sup> <a name="PskKeyInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput"></a>

```csharp
public string PskKeyInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `PskKey`<sup>Required</sup> <a name="PskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey"></a>

```csharp
public string PskKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue"></a>

```csharp
public VpnIpsecTunnelAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---


### VpnIpsecTunnelEspList <a name="VpnIpsecTunnelEspList" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelEspList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get"></a>

```csharp
private VpnIpsecTunnelEspOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnIpsecTunnelEspOutputReference <a name="VpnIpsecTunnelEspOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelEspOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup">ResetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm">ResetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiffieHellmanGroup` <a name="ResetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup"></a>

```csharp
private void ResetDiffieHellmanGroup()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetIntegrityAlgorithm` <a name="ResetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm"></a>

```csharp
private void ResetIntegrityAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput">DiffieHellmanGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput">IntegrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiffieHellmanGroupInput`<sup>Optional</sup> <a name="DiffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput"></a>

```csharp
public string DiffieHellmanGroupInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `IntegrityAlgorithmInput`<sup>Optional</sup> <a name="IntegrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput"></a>

```csharp
public string IntegrityAlgorithmInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `DiffieHellmanGroup`<sup>Required</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup"></a>

```csharp
public string DiffieHellmanGroup { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm"></a>

```csharp
public string IntegrityAlgorithm { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VpnIpsecTunnelIkeOutputReference <a name="VpnIpsecTunnelIkeOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelIkeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup">ResetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm">ResetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm">ResetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiffieHellmanGroup` <a name="ResetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup"></a>

```csharp
private void ResetDiffieHellmanGroup()
```

##### `ResetEncryptionAlgorithm` <a name="ResetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm"></a>

```csharp
private void ResetEncryptionAlgorithm()
```

##### `ResetIntegrityAlgorithm` <a name="ResetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm"></a>

```csharp
private void ResetIntegrityAlgorithm()
```

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput">DiffieHellmanGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput">EncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput">IntegrityAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup">DiffieHellmanGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm">IntegrityAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiffieHellmanGroupInput`<sup>Optional</sup> <a name="DiffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput"></a>

```csharp
public string DiffieHellmanGroupInput { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithmInput`<sup>Optional</sup> <a name="EncryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput"></a>

```csharp
public string EncryptionAlgorithmInput { get; }
```

- *Type:* string

---

##### `IntegrityAlgorithmInput`<sup>Optional</sup> <a name="IntegrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput"></a>

```csharp
public string IntegrityAlgorithmInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `DiffieHellmanGroup`<sup>Required</sup> <a name="DiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup"></a>

```csharp
public string DiffieHellmanGroup { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `IntegrityAlgorithm`<sup>Required</sup> <a name="IntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm"></a>

```csharp
public string IntegrityAlgorithm { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue"></a>

```csharp
public VpnIpsecTunnelIke InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---


### VpnIpsecTunnelTimeoutsOutputReference <a name="VpnIpsecTunnelTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new VpnIpsecTunnelTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



